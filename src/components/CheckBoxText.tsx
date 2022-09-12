import React, { useState } from "react";
import CheckBox from "./CheckBox";
import { TbDotsVertical } from "react-icons/tb";
import InputText from "./InputText";
import { Draggable } from "react-beautiful-dnd";
import { TasksType } from "./Types";

interface CheckBoxTextProps {
  index: number;
  task: TasksType;
  update: (id: string, title: string, isChcked: boolean, category: string) => void;
  category: string;
}

const CheckBoxText: React.FC<CheckBoxTextProps> = ({ index, task, update }) => {
  const [showDots, setShowDots] = useState<boolean>(false);
  const [editActived, setEditActived] = useState<boolean>(false);
  const { id, title, isChecked, category } = task;

  const onMouseOverCheckBoxText = () => {
    setShowDots(true);
  };

  const onMouseLeaveCheckBoxText = () => {
    if (!editActived) {
      setShowDots(false);
    }
  };

  const onChangeInputText = (newValidTitle: string) =>
    update(id, newValidTitle, isChecked, category);

  const onBlurInputText = () => {
    setEditActived(false);
    setShowDots(false);
  };

  const onFocusinputtext: React.FocusEventHandler<HTMLInputElement> = (_) => {
    setEditActived(true);
  };

  const onClickSpan = () => {
    setEditActived(true);
  };

  return (
    <Draggable draggableId={id} index={index} key={id}>
      {(provided) => (
        <div
          className="flex items-center"
          onMouseOver={onMouseOverCheckBoxText}
          onMouseLeave={onMouseLeaveCheckBoxText}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="max-w-[20px] w-[20px]">
            {showDots && (
              <div>
                <div className="flex text-slate-300 text-sm items-center justify-center">
                  <TbDotsVertical />
                  <TbDotsVertical className="-ml-2" />
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center cursor-text gap-2 select-none p-2 hover:rounded-md hover:bg-gray-100 flex-1">
            <CheckBox
              isChecked={isChecked}
              className="z-10"
              onClick={() => {
                if (update) update(id, title, !isChecked, category);
              }}
            />
            <div className={`relative ${editActived ? "w-[100%]" : "w-auto"}`}>
              {editActived ? (
                <InputText
                  title={title}
                  onChange={onChangeInputText}
                  onBlur={onBlurInputText}
                  onFocus={onFocusinputtext}
                />
              ) : (
                <span
                  className={`cursor-text ${isChecked ? "text-slate-400" : "text-slate-700"
                    }`}
                  onClick={onClickSpan}
                >
                  {title}
                </span>
              )}
              {isChecked && editActived !== isChecked && (
                <div
                  className="absolute animate-widthToRight left-0 top-[50%] translate-y-[-50%] h-[1px] w-[100%] bg-slate-300"
                  style={{ animationDuration: "0.1s" }}
                ></div>
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default CheckBoxText;
