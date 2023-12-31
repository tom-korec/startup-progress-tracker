import { useStore } from "~/core/store/index";

export const useIsPreviousStageCompleted = (stageOrder: number) => {
  const { stages } = useStore();

  if (stageOrder <= 1) {
    return true;
  }

  const index = stageOrder - 1;

  return stages[index - 1]!.steps.every((step) => step.isCompleted);
};

export const useHasNextStageBegan = (stageId: string) => {
  const { stages } = useStore();

  const index = stages.findIndex((stage) => stage.id === stageId);

  if (index === -1) {
    throw Error("Stage not found");
  }

  if (index === stages.length - 1) {
    return false;
  }

  return stages[index + 1]!.steps.some((step) => step.isCompleted);
};

export const useIsLastUnfinishedStep = (stepId: string) => {
  const { stages } = useStore();

  return stages.every((stage) => {
    return stage.steps
      .filter((step) => step.id !== stepId)
      .every((step) => step.isCompleted);
  });
};

export const useIsEveryStageCompleted = () => {
  const { stages } = useStore();

  return stages.every((stage) => stage.steps.every((step) => step.isCompleted));
};
