import { Actions } from "~/core/store/actions";
import type { Action, Store } from "~/core/store/types";

export const reducer = (state: Store, action: Action): Store => {
  switch (action.type) {
    case Actions.ADD_STAGE:
      return {
        ...state,
        stages: [...state.stages, action.stage],
      };
    case Actions.REMOVE_STAGE:
      return {
        ...state,
        stages: state.stages.filter((stage) => stage.id !== action.id),
      };
    case Actions.EDIT_STAGE:
      return {
        ...state,
        stages: state.stages.map((stage) => {
          if (stage.id === action.stage.id) {
            return action.stage;
          }
          return stage;
        }),
      };
    case Actions.ADD_STEP:
      return {
        ...state,
        stages: state.stages.map((stage) => {
          if (stage.id === action.stageId) {
            return {
              ...stage,
              steps: [...stage.steps, action.step],
            };
          }
          return stage;
        }),
      };
    case Actions.REMOVE_STEP:
      return {
        ...state,
        stages: state.stages.map((stage) => {
          if (stage.id === action.stageId) {
            return {
              ...stage,
              steps: stage.steps.filter((step) => step.id !== action.stepId),
            };
          }
          return stage;
        }),
      };
    case Actions.TOGGLE_STEP:
      return {
        ...state,
        stages: state.stages.map((stage) => {
          if (stage.id === action.stageId) {
            return {
              ...stage,
              steps: stage.steps.map((step) => {
                if (step.id === action.stepId) {
                  return {
                    ...step,
                    isCompleted: !step.isCompleted,
                  };
                }
                return step;
              }),
            };
          }
          return stage;
        }),
      };

    case Actions.RESET_NEXT_STAGES:
      let isNextStage = false;

      return {
        ...state,
        stages: state.stages.map((stage) => {
          if (stage.id === action.stageId) {
            isNextStage = true;
            return stage;
          }
          if (isNextStage) {
            return {
              ...stage,
              steps: stage.steps.map((step) => ({
                ...step,
                isCompleted: false,
              })),
            };
          }
          return stage;
        }),
      };
    default:
      throw Error("Unsupported action called in reducer");
  }
};
