export interface Step {
  id: string;
  name: string;
  isCompleted: boolean;
}

export interface Stage {
  id: string;
  name: string;
  steps: Step[];
}

export interface RandomFact {
  id: string;
  text: string
}
