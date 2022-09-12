import { Dispatch, SetStateAction } from "react";

export type TasksType = {
  id: string;
  title: string;
  category: string;
  isChecked: boolean;
};

export type ColumnType = {
  id: string;
  title: string;
  taskIds: string[];
};

export type TaskDataType = {
  allTasks: number;
  tasks: {
    [key: string]: TasksType;
  },
  columns: {
    [key: string]: ColumnType,
  },
  columnsOrder: string[],
}

export interface MainModalProps {
  path: string[];
  title: string;
  data: TaskDataType;
  setter: Dispatch<SetStateAction<TaskDataType>>;
}

