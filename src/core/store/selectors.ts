import { useStore } from "~/core/store/index";

export const useIsPreviousStageCompleted = (stageOrder: number) => {
  const { stages } = useStore();

  if (stageOrder <= 1) {
    return true;
  }

  const index = stageOrder - 1;

  return stages[index - 1]!.steps.every((step) => step.isCompleted);
};
