import React from "react";
import Breadcrumb from "./Breadcrumb";
import CircleProgress from "./CircleProgress";
import ModalOptions from "./ModalOptions";
import SwitchButtonText from "./SwitchButtonText";
import { BiPlus } from "react-icons/bi";

interface TodoModalProps {
  path?: Array<string>;
  title?: string;
}

const TodoModal: React.FC<TodoModalProps> = ({ path, title = "Untitled" }) => {
  return (
    <div className="bg-white p-5 rounded-xl w-[600px]">
      {/* main modal */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          {/* breadcrumb */}
          {path !== undefined && <Breadcrumb path={path} />}
          {/* options */}
          <ModalOptions />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-semibold text-stone-700">{title}</h2>
          <SwitchButtonText buttonsTitle={["Describtion", "Checklist"]} />
          <div className="flex justify-between items-center">
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
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Planning</span>
            <div className="w-[100%] h-[1px] bg-slate-200"></div>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" checked={true} />
            <span className="text-slate-400 line-through">Trend and Competitor Analysis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
