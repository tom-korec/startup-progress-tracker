import React, { useMemo, useRef } from "react";
import ConfettiExplosion from "react-confetti-explosion";

import type { Stage } from "~/types";

interface StageCompletionConfettiProps {
  stage: Stage;
}

export const StageCompletionConfetti: React.FC<StageCompletionConfettiProps> = ({ stage }) => {
  const isCompleted = stage.steps.every((step) => step.isCompleted);

  // For preventing confetti from displaying on first render
  const previousValueRef = useRef(isCompleted);

  const displayConfetti = useMemo(() => {
    if (isCompleted && !previousValueRef.current) {
      return true;
    }

    previousValueRef.current = isCompleted;

    return false;
  }, [isCompleted]);

  if (!displayConfetti) {
    return null;
  }

  return (
    <div className={"absolute"}>
      <ConfettiExplosion particleSize={12} particleCount={150} width={1000} />
    </div>
  );
};
