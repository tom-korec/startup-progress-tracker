import type { Step } from "~/types";
import React from "react";
import { CheckBox } from "~/components/CheckBox";
import { useStoreDispatch } from "~/core/store";

export interface StepProps {
  step: Step;
  stageId: string;
}

export const StepRow: React.FC<StepProps> = ({ step, stageId }) => {
  const { toggleStep } = useStoreDispatch();

  return (
    <div className={"flex items-center gap-4"}>
      <CheckBox
        isChecked={step.isCompleted}
        onChange={() => toggleStep(stageId, step.id)}
      />
      <div>{step.name}</div>
    </div>
  );
};
