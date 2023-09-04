import type { Phase } from "~/types";

export interface Store {
  isInitialized: boolean;
  phases: Phase[];
}
