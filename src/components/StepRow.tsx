import React, { useState } from "react";

import type { Step } from "~/types";
import { CheckBox } from "~/components/CheckBox";
import { useStoreDispatch } from "~/core/store";
import { useHasNextStageBegan } from "~/core/store/selectors";
import { ConfirmModal } from "~/components/ConfirmModal";

export interface StepProps {
  step: Step;
  stageId: string;
  disabled: boolean;
}

export const StepRow: React.FC<StepProps> = ({ step, stageId, disabled }) => {
  const { toggleStep, resetNextStages } = useStoreDispatch();

  const canCheckWithoutConfirmation = !useHasNextStageBegan(stageId);

  const [isConfirmModalOpened, setIsConfirmModalOpened] = useState(false);

  return (
    <div className={"flex items-center gap-4"}>
      {isConfirmModalOpened && (
        <ConfirmModal
          onConfirm={() => {
            setIsConfirmModalOpened(false)
            resetNextStages(stageId);
            toggleStep(stageId, step.id);
          }}
          onClose={() => setIsConfirmModalOpened(false)}
        />
      )}

      <CheckBox
        isChecked={step.isCompleted}
        disabled={disabled}
        onChange={() => {
          if (canCheckWithoutConfirmation) {
            toggleStep(stageId, step.id);
          } else {
            setIsConfirmModalOpened(true);
          }
        }}
      />
      <div>{step.name}</div>
    </div>
  );
};
