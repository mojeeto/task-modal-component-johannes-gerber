import React from "react";
import CheckBox from "./CheckBox";

interface CheckBoxText {
  title?: string;
  isChecked?: boolean;
}

const CheckBoxText: React.FC<CheckBoxText> = ({
  title = "",
  isChecked = false,
}) => {
  return (
    <div className="flex items-center gap-2 select-none cursor-pointer">
      <CheckBox isChecked={isChecked} />
      <div className="relative">
        <span className={isChecked ? "text-slate-400" : "text-slate-700"}>{title}</span>
        {isChecked &&
          <div className="absolute animate-widthToRight left-0 top-[50%] translate-y-[-50%] h-[1px] w-[100%] bg-slate-300" style={{ animationDuration: "0.1s" }}></div>
        }
      </div>
    </div>
  );
};

export default CheckBoxText;
