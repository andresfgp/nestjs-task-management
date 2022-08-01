export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  OIN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
