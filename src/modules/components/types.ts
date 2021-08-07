import { QueryResult } from "@apollo/client";

export interface TaskType {
  id?: string;
  taskTitle: string;
  taskUser: string;
  taskDscr: string;
  taskCheck: boolean;
  taskStart: string;
  taskEnd: string;
}

export type TaskTypeData = {
  tasksList: {
    items: TaskType[];
  };
};
