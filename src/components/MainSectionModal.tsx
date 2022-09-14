import React, { useState, useEffect, useCallback } from "react";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import HeaderTodoModal from "./HeaderTodoModal";
import OptionsTodoModal from "./OptionsTodoModal";
import SectionTodoModal from "./SectionTodoModal";
import { MainModalProps, TaskDataType } from "./Types";

const MainSectionModal: React.FC<MainModalProps> = ({
  path,
  title,
  data,
  setter,
}) => {
  const allTasks = data.allTasks;
  const [percent, setPercent] = useState<number>(25);
  const [checkedCount, setCheckedCount] = useState<number>(2);

  const calculatePercent = useCallback(() => {
    const groupsOfTasks = data.columnsOrder.map((columnsId) => {
      return data.columns[columnsId].taskIds;
    });
    let x = 0;
    groupsOfTasks.forEach((tasksId) => {
      tasksId.forEach((taskId) => {
        if (data.tasks[taskId].isChecked) x += 1;
      });
    });
    setCheckedCount(x);
    setPercent(100 * (x / allTasks));
  }, [data, allTasks]);

  const update = (
    id: string,
    newTitle: string,
    isChecked: boolean,
    category: string
  ) => {
    const newState: TaskDataType = {
      ...data,
      tasks: {
        ...data.tasks,
        [id]: {
          id: id,
          title: newTitle,
          isChecked: isChecked,
          category: category,
        },
      },
    };
    setter(newState);
  };

  const onDragEnd: OnDragEndResponder = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
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
      },
    };
    setter(newState);
    if (destinationColumn.id !== sourceColumn.id) {
      const { title, isChecked } = data.tasks[draggableId];
      update(draggableId, title, isChecked, destinationColumn.id);
    }
  };

  useEffect(() => {
    calculatePercent();
  }, [data, calculatePercent]);

  return (
    <div className="flex flex-col gap-4 my-4">
      <OptionsTodoModal path={path} />
      <HeaderTodoModal
        title={title}
        percent={percent}
        all={allTasks}
        checkedCount={checkedCount}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        {data.columnsOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskid) => data.tasks[taskid]);
          return (
            <SectionTodoModal
              key={columnId}
              column={column}
              tasks={tasks}
              taskUpdate={update}
            />
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default MainSectionModal;
