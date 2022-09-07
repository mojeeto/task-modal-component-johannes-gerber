import React, { useState } from "react";
import CheckBox from "./CheckBox";
import { TbDotsVertical } from "react-icons/tb";
import InputText from "./InputText";

interface CheckBoxTextProps {
  id?: number;
  title?: string;
  isChecked?: boolean;
  update?: (id: number, title: string, isChcked: boolean) => void;
}

const CheckBoxText: React.FC<CheckBoxTextProps> = ({
  id = 0,
  title = "",
  isChecked = false,
  update = null,
}) => {
  const [showDots, setShowDots] = useState<boolean>(false);
  const [editActived, setEditActived] = useState<boolean>(false);

  const onMouseOverCheckBoxText = () => {
    setShowDots(true);
  };

  const onMouseLeaveCheckBoxText = () => {
    if (!editActived) {
      setShowDots(false);
    }
  };

  const onChangeInputText = (newValidTitle: string) => {
    if (update) {
      update(id, newValidTitle, isChecked);
    }
  };

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
    <div
      className="flex items-center animate-fadeUp"
      style={{ animationDelay: "0.8s" }}
      onMouseOver={onMouseOverCheckBoxText}
      onMouseLeave={onMouseLeaveCheckBoxText}
    >
      <div className="max-w-[20px] w-[20px]">
        {showDots && (
          <div className="cursor-grab">
            <div className="flex text-slate-300 text-sm items-center justify-center">
              <TbDotsVertical />
              <TbDotsVertical className="-ml-2" />
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 select-none p-2 hover:rounded-md hover:bg-gray-100 flex-1">
        <CheckBox isChecked={isChecked} className="z-10" onClick={() => {
          if (update)
            update(id, title, !isChecked);
        }} />
        <div
          className={`relative cursor-text ${editActived ? "w-[100%]" : "w-auto"
            }`}
        >
          {editActived ? (
            <InputText
              title={title}
              onChange={onChangeInputText}
              onBlur={onBlurInputText}
              onFocus={onFocusinputtext}
            />
          ) : (
            <span
              className={isChecked ? "text-slate-400" : "text-slate-700"}
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
  );
};

export default CheckBoxText;
