import React from "react";
import { Droppable } from "react-beautiful-dnd";
import CheckBoxText from "./CheckBoxText";
import { DataType } from "./TodoModal";

interface SectionTodoModalProps {
  sectionTitle: string;
  tasks: DataType[];
  taskUpdate: (id: string, newTitle: string, isChecked: boolean) => void;
}

const SectionTodoModal: React.FC<SectionTodoModalProps> = ({
  sectionTitle,
  tasks,
  taskUpdate,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3 pl-9 ">
        <span className="text-slate-400 animate-fadeUp capitalize">
          {sectionTitle}
        </span>
        <div
          className="animate-widthToRight h-[1px] bg-slate-200"
          style={{ animationDelay: "0.6s" }}
        ></div>
      </div>
      <Droppable droppableId={sectionTitle}>
        {(provided) => (
          <div
            className="flex flex-col pl-1 relative"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <CheckBoxText
                key={index}
                index={index}
                task={task}
                update={taskUpdate}
                category={sectionTitle}
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
