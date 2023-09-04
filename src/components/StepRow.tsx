import type { Step } from "~/types";
import React from "react";
import { CheckBox } from "~/components/CheckBox";
import { useStoreDispatch } from "~/core/store";

export interface StepProps {
  step: Step;
  stageId: string;
  disabled: boolean;
}

export const StepRow: React.FC<StepProps> = ({ step, stageId, disabled }) => {
  const { toggleStep } = useStoreDispatch();

  return (
    <div className={"flex items-center gap-4"}>
      <CheckBox
        isChecked={step.isCompleted}
        disabled={disabled}
        onChange={() => toggleStep(stageId, step.id)}
      />
      <div>{step.name}</div>
    </div>
  );
};
