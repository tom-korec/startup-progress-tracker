import React from "react";
import type { Stage } from "~/types";
import { StepRow } from "~/components/StepRow";
import { CardNumber } from "~/components/CardNumber";
import { CardCheckMark } from "~/components/CardCheckMark";
import { useIsPreviousStageCompleted } from "~/core/store/selectors";
import { StageCompletionConfetti } from "~/components/StageCompletionConfetti";

interface StageProps {
  stage: Stage;
  order: number;
}

export const StageCard: React.FC<StageProps> = ({ stage, order }) => {
  const isPreviousStageCompleted = useIsPreviousStageCompleted(order);

  const isCompleted = stage.steps.every((step) => step.isCompleted);

  return (
    <div
      className={`relative flex w-[100%] max-w-xs flex-col gap-4 rounded-xl ${
        isCompleted
          ? "bg-purple-100"
          : isPreviousStageCompleted
          ? "bg-purple-300"
          : "bg-purple-600"
      } p-4 text-purple-950`}
    >
      <CardNumber number={order} />

      <StageCompletionConfetti stage={stage} />

      {isCompleted && <CardCheckMark />}

      <h3 className={`text-2xl font-bold text-purple-900`}>{stage.name}</h3>
      <div className="flex flex-col gap-4">
        {stage.steps.map((step) => (
          <StepRow
            key={step.id}
            stageId={stage.id}
            step={step}
            disabled={!isPreviousStageCompleted}
          />
        ))}
      </div>
    </div>
  );
};
