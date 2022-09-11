import React, { Dispatch, SetStateAction } from "react";
import OptionsTodoModal from "./OptionsTodoModal";
import HeaderTodoModal from "./HeaderTodoModal";
import SectionTodoModal from "./SectionTodoModal";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";


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
  tasks: {
    [key: string]: TasksType;
  },
  columns: {
    [key: string]: ColumnType,
  },
  columnsOrder: string[],
}


interface TodoModalProps {
  path: string[];
  title: string;
  data: TaskDataType;
  setter: Dispatch<SetStateAction<TaskDataType>>;
}

const TodoModal: React.FC<TodoModalProps> = ({
  path,
  title,
  data,
  setter,
}) => {

  const update = (id: string, newTitle: string, isChecked: boolean, category: string) => {
    setter((prevState: TaskDataType) => {
      prevState.tasks[id] = {
        id: id,
        title: newTitle,
        isChecked: isChecked,
        category: category
      }
      return { ...prevState };
    });
  };

  const onDragEnd: OnDragEndResponder = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;
    const sourceColumn = data.columns[source.droppableId];
    const destinationColumn = data.columns[destination.droppableId];
    const taskIdsSourceColumn = sourceColumn.taskIds;
    const taskIdsDestinationColumn = destinationColumn.taskIds;
    taskIdsSourceColumn.splice(source.index, 1);
    taskIdsDestinationColumn.splice(destination.index, 0, draggableId);
    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [sourceColumn.id]: { ...sourceColumn },
        [destinationColumn.id]: { ...destinationColumn },
      }
    }
    setter(newState);
    if (destinationColumn.id !== sourceColumn.id) {
      const { title, isChecked } = data.tasks[draggableId];
      update(draggableId, title, isChecked, destinationColumn.id);
    }
  }

  return (
    <div className="bg-white p-1 py-5 rounded-xl w-[600px]">
      {/* main modal */}
      <div className="flex flex-col gap-4">
        <OptionsTodoModal path={path} />
        <HeaderTodoModal title={title} />
        <DragDropContext onDragEnd={onDragEnd}>
          {
            data.columnsOrder.map((columnId) => {
              const column = data.columns[columnId];
              const tasks = column.taskIds.map(taskid => data.tasks[taskid]);
              return <SectionTodoModal key={columnId} column={column} tasks={tasks} taskUpdate={update} />
            })
          }
        </DragDropContext>
      </div>
    </div >
  );
};

export default TodoModal;
