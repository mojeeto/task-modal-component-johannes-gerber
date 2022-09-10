import React, { Dispatch, SetStateAction } from "react";
import OptionsTodoModal from "./OptionsTodoModal";
import HeaderTodoModal from "./HeaderTodoModal";
import SectionTodoModal from "./SectionTodoModal";
import { DragDropContext } from "react-beautiful-dnd";


export type Categoris = string[];

export type DataType = {
  id: string;
  title: string;
  category: string;
  isChecked: boolean;
};

interface TodoModalProps {
  path: string[];
  title: string;
  data: DataType[];
  setter: Dispatch<SetStateAction<DataType[]>> | null;
  categories: Categoris;
}

const TodoModal: React.FC<TodoModalProps> = ({
  path,
  title,
  data,
  setter,
  categories,
}) => {

  const update = (id: string, newTitle: string, isChecked: boolean) => {
    if (setter !== null) {
      setter((prevState: DataType[]) => {
        const newState = prevState.map((data) => {
          if (data.id === id) {
            data.title = newTitle;
            data.isChecked = isChecked;
          }
          return data;
        });
        return newState;
      });
    }
  };

  const onDragEnd = (result: any) => {
    console.log(result);
  }

  return (
    <div className="bg-white p-1 py-5 rounded-xl w-[600px]">
      {/* main modal */}
      <div className="flex flex-col gap-4">
        <OptionsTodoModal path={path} />
        <HeaderTodoModal title={title} />
        <DragDropContext onDragEnd={onDragEnd}>
          {
            categories.map((sectionId, index) => {
              const tasks = data.filter(d => d.category === sectionId);
              return <SectionTodoModal key={index} sectionTitle={sectionId} tasks={tasks} taskUpdate={update} />
            })
          }
        </DragDropContext>
      </div>
    </div>
  );
};

export default TodoModal;
