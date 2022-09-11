import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
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
  allTasks: number;
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

  const allTasks = data.allTasks;
  const [percent, setPercent] = useState<number>(25);
  const [checkedCount, setCheckedCount] = useState<number>(2);

  const calculatePercent = () => {
    const groupsOfTasks = data.columnsOrder.map((columnsId) => {
      return data.columns[columnsId].taskIds;
    });
    let x = 0;
    groupsOfTasks.map(tasksId => {
      tasksId.map(taskId => {
        if (data.tasks[taskId].isChecked) x += 1;
      })
    });
    setCheckedCount(x);
    setPercent(100 * (x / allTasks));
  }

  const update = (id: string, newTitle: string, isChecked: boolean, category: string) => {
    const newState: TaskDataType = {
      ...data,
      tasks: {
        ...data.tasks,
        [id]: {
          id: id,
          title: newTitle,
          isChecked: isChecked,
          category: category,
        }
      }
    }
    setter(newState);
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


  useEffect(() => {
    calculatePercent();
  }, [data]);

  return (
    <div className="bg-white p-1 py-5 rounded-xl w-[600px]">
      {/* main modal */}
      <div className="flex flex-col gap-4">
        <OptionsTodoModal path={path} />
        <HeaderTodoModal title={title} percent={percent} all={allTasks} checkedCount={checkedCount} />
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
