import React from "react";
import { Droppable } from "react-beautiful-dnd";
import CheckBoxText from "./CheckBoxText";
import { ColumnType, TasksType } from "./TodoModal";

interface SectionTodoModalProps {
  column: ColumnType;
  tasks: TasksType[];
  taskUpdate: (id: string, newTitle: string, isChecked: boolean, category: string) => void;
}

const SectionTodoModal: React.FC<SectionTodoModalProps> = ({
  column,
  tasks,
  taskUpdate,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3 pl-9 ">
        <span className="text-slate-400 animate-fadeUp capitalize">
          {column.title}
        </span>
        <div
          className="animate-widthToRight h-[1px] bg-slate-200"
          style={{ animationDelay: "0.6s" }}
        ></div>
      </div>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="flex flex-col pl-1 animate-opacity"
            style={{ animationDelay: "1s" }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <CheckBoxText
                key={index}
                index={index}
                task={task}
                update={taskUpdate}
                category={column.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default SectionTodoModal;
