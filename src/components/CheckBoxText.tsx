import React, { useState } from "react";
import CheckBox from "./CheckBox";
import { TbDotsVertical } from "react-icons/tb";
import InputText from "./InputText";

interface CheckBoxTextProps {
  title?: string;
  isChecked?: boolean;
}

const CheckBoxText: React.FC<CheckBoxTextProps> = ({
  title = "",
  isChecked = false,
}) => {
  const [showDots, setShowDots] = useState<boolean>(false);
  const [value, setValue] = useState<string>(title);
  const [editActived, setEditActived] = useState<boolean>(false);
  return (
    <div
      className="flex items-center animate-fadeUp"
      style={{ animationDelay: "0.8s" }}
      onMouseOver={() => {
        setShowDots(true);
      }}
      onMouseLeave={() => {
        if (!editActived) {
          setShowDots(false);
        }
      }}
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
        <CheckBox isChecked={isChecked} className="z-10" />
        <div
          className={`relative cursor-text ${editActived ? "w-[100%]" : "w-auto"
            }`}
        >
          {editActived ? (
            <InputText
              title={value}
              onChange={(e) => {
                const target = e.currentTarget;
                if (target) {
                  const newValue = target.value;
                  setValue(newValue);
                }
              }}
              onBlur={(_) => {
                setEditActived(false);
                setShowDots(false);
              }}
              onFocus={(_) => {
                setEditActived(true);
              }}
            />
          ) : (
            <span
              className={isChecked ? "text-slate-400" : "text-slate-700"}
              onClick={() => {
                setEditActived(true);
              }}
            >
              {title}
            </span>
          )}
          {isChecked && editActived !== isChecked && (
            <div
              className="absolute animate-widthToRight left-0 top-[50%] translate-y-[-50%] h-[1px] w-[100%] bg-slate-300"
              style={{ animationDuration: "0.1s" }}
            ></div>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default CheckBoxText;