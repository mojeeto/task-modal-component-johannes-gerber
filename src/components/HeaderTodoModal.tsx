import React from "react";
import { BiPlus } from "react-icons/bi";
import CircleProgress from "./CircleProgress";
import SwitchButtonText from "./SwitchButtonText";

interface HeaderTodoModalProps {
  title: string;
}

const HeaderTodoModal: React.FC<HeaderTodoModalProps> = ({ title }) => {
  return (
    <div className="flex flex-col gap-5 pl-9 ">
      <h2
        className="text-3xl font-semibold text-stone-700 animate-fadeUp"
        style={{ animationDelay: "0.7s" }}
      >
        {title}
      </h2>
      <SwitchButtonText
        buttonsTitle={["Describtion", "Checklist"]}
        className="animate-fadeUp"
        style={{ animationDelay: "0.8s" }}
      />
      <div
        className="flex justify-between items-center animate-fadeUp"
        style={{ animationDelay: "0.9s" }}
      >
        <div className="flex items-center gap-2">
          <CircleProgress />
          <div className="px-2 py-0.5 rounded-md bg-blue-600 text-white text-md">
            2<span className="font-light">/</span>8
          </div>
        </div>
        <div>
          <button className="px-5 py-1.5 border-[1px] rounded-md border-slate-300 text-slate-500 text-xl">
            <BiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTodoModal;
