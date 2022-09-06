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
      className="flex items-center gap-2 select-none animate-fadeUp"
      style={{ animationDelay: "0.8s" }}
      onMouseOver={() => {
        setShowDots(true);
      }}
      onMouseLeave={() => {
        setShowDots(false);
      }}
    >
      <CheckBox isChecked={isChecked} />
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
        {(isChecked && editActived !== isChecked) && (
          <div
            className="absolute animate-widthToRight left-0 top-[50%] translate-y-[-50%] h-[1px] w-[100%] bg-slate-300"
            style={{ animationDuration: "0.1s" }}
          ></div>
        )}{" "}
      </div>
      {showDots && (
        <div className="cursor-grab absolute -left-7">
          <div className="flex text-slate-300 text-sm items-center justify-center">
            <TbDotsVertical />
            <TbDotsVertical className="-ml-2" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckBoxText;
