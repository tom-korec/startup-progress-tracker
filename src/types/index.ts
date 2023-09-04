export interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
}

export interface Phase {
  id: string;
  name: string;
  tasks: Task[];
}
