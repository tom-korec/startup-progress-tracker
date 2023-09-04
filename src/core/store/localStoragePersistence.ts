import { useReducer } from "react";

import type { Store } from "~/core/store/types";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "~/core/persisence/localStoragePersistence";
import { withPersistence } from "~/core/persisence/persistence";
import { reducer } from "~/core/store/reducer";

const KEY = "STARTUP_PROGRESS_STORE_LS";

const mockedData = {
  stages: [
    {
      id: "stage1",
      name: "Idea",
      steps: [
        { id: "step1", name: "Step 1", isCompleted: true },
        { id: "step2", name: "Step 2", isCompleted: true },
      ],
    },

    {
      id: "stage2",
      name: "Realization",
      steps: [
        { id: "step5", name: "Step 5", isCompleted: true },
        { id: "step6", name: "Step 6", isCompleted: true },
        { id: "step7", name: "Step 7", isCompleted: true },
        { id: "step8", name: "Step 8", isCompleted: false },
      ],
    },

    {
      id: "stage3",
      name: "Reward",
      steps: [
        { id: "step9", name: "Step 9", isCompleted: false },
        { id: "step10", name: "Step 10", isCompleted: false },
        { id: "step11", name: "Step 11", isCompleted: false },
      ],
    },
  ],
};

export const initFromLocalStorage = (defaultState: Store): Store => {
  const stateFromLocalStorage: Store | null = loadFromLocalStorage(KEY);

  if (!stateFromLocalStorage) {
    return mockedData;
  }

  return stateFromLocalStorage ?? defaultState;
};

const saveStoreToLocalStorage = (state: Store) =>
  saveToLocalStorage(state, KEY);

export const useReducerWithLocalStoragePersistence = () => {
  return useReducer(
    withPersistence(reducer, (state) => saveStoreToLocalStorage(state)),
    { stages: [] },
    initFromLocalStorage,
  );
};
