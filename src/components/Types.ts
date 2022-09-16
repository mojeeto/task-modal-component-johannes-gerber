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
  path: string[];
  title: string;
  allTasks: number;
  tasks: {
    [key: string]: TasksType;
  };
  columns: {
    [key: string]: ColumnType;
  };
  columnsOrder: string[];
  comments: CommentNeededType[];
};

export type Reacts = {
  emoji: string;
  count: number;
};
export type CommentNeededType = {
  commentId: number;
  username: string;
  imageSrc: string;
  comment: string;
  time: string;
  reacts: Reacts[];
  pickerShow: boolean;
};

export interface InputPickerStateProps {
  pickerInputState: boolean;
  setPickerInputState: React.Dispatch<React.SetStateAction<boolean>>;
}
