import React from "react";
import type { Stage } from "~/types";
import { StepRow } from "~/components/StepRow";
import { CardNumber } from "~/components/CardNumber";
import { CardCheckMark } from "~/components/CardCheckMark";

interface StageProps {
  stage: Stage;
  order: number;
}

export const StageCard: React.FC<StageProps> = ({ stage, order }) => {
  return (
    <div className="relative flex w-[100%] max-w-xs flex-col gap-4 rounded-xl bg-purple-300 p-4 text-purple-950">
      <CardNumber number={order} />

      {stage.steps.every((step) => step.isCompleted) && <CardCheckMark />}

      <h3 className="text-2xl font-bold text-purple-900">{stage.name}</h3>
      <div className="flex flex-col gap-4">
        {stage.steps.map((step) => (
          <StepRow key={step.id} stageId={stage.id} step={step} />
        ))}
      </div>
    </div>
  );
};
