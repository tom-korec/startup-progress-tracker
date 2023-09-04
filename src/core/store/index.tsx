import React, { createContext, useCallback, useContext } from "react";

import type { Stage, Step } from "~/types";
import type { Dispatch, DispatchActions, Store } from "~/core/store/types";
import { useReducerWithLocalStoragePersistence } from "~/core/store/localStoragePersistence";
import { Actions } from "~/core/store/actions";

const StoreStateContext = createContext<Store | undefined>(undefined);
const StoreDispatchContext = createContext<Dispatch | undefined>(undefined);

export const StoreProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducerWithLocalStoragePersistence();
  return (
    <StoreStateContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  );
};

export const useStore = () => {
  const state = useContext(StoreStateContext);

  if (state === undefined) {
    throw Error("Using Context outside of provider!");
  }

  return state;
};

export const useStoreDispatch = (): DispatchActions => {
  const dispatch = useContext(StoreDispatchContext);

  if (dispatch === undefined) {
    throw Error("Using Dispatch context outside of provider!");
  }

  const addStage = useCallback(
    (stage: Stage) => dispatch({ type: Actions.ADD_STAGE, stage }),
    [dispatch],
  );

  const removeStage = useCallback(
    (id: string) => dispatch({ type: Actions.REMOVE_STAGE, id }),
    [dispatch],
  );

  const editStage = useCallback(
    (stage: Stage) => dispatch({ type: Actions.EDIT_STAGE, stage }),
    [dispatch],
  );

  const addStep = useCallback(
    (stageId: string, step: Step) =>
      dispatch({ type: Actions.ADD_STEP, stageId, step }),
    [dispatch],
  );

  const removeStep = useCallback(
    (stageId: string, stepId: string) =>
      dispatch({ type: Actions.REMOVE_STEP, stageId, stepId }),
    [dispatch],
  );

  const toggleStep = useCallback(
    (stageId: string, stepId: string) =>
      dispatch({ type: Actions.TOGGLE_STEP, stageId, stepId }),
    [dispatch],
  );

  return { addStage, removeStage, editStage, addStep, removeStep, toggleStep };
};
