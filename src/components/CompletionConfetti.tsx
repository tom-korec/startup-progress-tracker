import { useMemo, useRef } from "react";
import ConfettiExplosion from "react-confetti-explosion";

import { useIsEveryStageCompleted } from "~/core/store/selectors";

export const CompletionConfetti = () => {
  const isCompleted = useIsEveryStageCompleted();

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
      <ConfettiExplosion particleSize={8} particleCount={300} width={2000} />
    </div>
  );
};
