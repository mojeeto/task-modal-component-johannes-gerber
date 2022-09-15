import React from 'react';
import { TaskDataType } from './Types';

type updateDispatch = React.Dispatch<React.SetStateAction<TaskDataType>>;

interface TodoModalContextProps {
  children: React.ReactNode;
  data: TaskDataType;
  update: updateDispatch;
}

export const TodoModalContext = React.createContext<[TaskDataType | null, updateDispatch | null]>([null, null])

const TodoModalContextProvider: React.FC<TodoModalContextProps> = ({ children, data, update }) => {
  return <TodoModalContext.Provider value={[data, update]}>{children}</TodoModalContext.Provider>
}


export default TodoModalContextProvider;
