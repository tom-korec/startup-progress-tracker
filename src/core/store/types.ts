import type { Stage, Step } from "~/types";
import type { Actions } from "~/core/store/actions";

export interface Store {
  stages: Stage[];
}

export type Action =
  | {
      type: Actions.ADD_STAGE;
      stage: Stage;
    }
  | {
      type: Actions.REMOVE_STAGE;
      id: string;
    }
  | {
      type: Actions.EDIT_STAGE;
      stage: Stage;
    }
  | {
      type: Actions.RESET_NEXT_STAGES;
      stageId: string;
    }
  | {
      type: Actions.ADD_STEP;
      stageId: string;
      step: Step;
    }
  | {
      type: Actions.REMOVE_STEP;
      stageId: string;
      stepId: string;
    }
  | {
      type: Actions.TOGGLE_STEP;
      stageId: string;
      stepId: string;
    };

export type Dispatch = (action: Action) => void;

export type DispatchActions = {
  addStage: (stage: Stage) => void;
  removeStage: (id: string) => void;
  editStage: (stage: Stage) => void;
  resetNextStages: (stageId: string) => void;
  addStep: (stageId: string, step: Step) => void;
  removeStep: (stageId: string, stepId: string) => void;
  toggleStep: (stageId: string, stepId: string) => void;
};
