import React from "react";
import Breadcrumb from "./Breadcrumb";
import CircleProgress from "./CircleProgress";
import ModalOptions from "./ModalOptions";
import SwitchButtonText from "./SwitchButtonText";
import { BiPlus } from "react-icons/bi";
import CheckBoxText from "./CheckBoxText";

interface TodoModalProps {
  path?: Array<string>;
  title?: string;
}

const TodoModal: React.FC<TodoModalProps> = ({ path, title = "Untitled" }) => {
  return (
    <div className="bg-white p-1 py-5 rounded-xl w-[600px]">
      {/* main modal */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center pl-9">
          {/* breadcrumb */}
          {path !== undefined && <Breadcrumb path={path} />}
          {/* options */}
          <ModalOptions />
        </div>
        <div className="flex flex-col gap-5 pl-9">
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
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 pl-9">
            <span className="text-slate-400 animate-fadeUp">Planning</span>
            <div
              className="animate-widthToRight h-[1px] bg-slate-200"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>
          <div className="flex flex-col pl-1">
            <CheckBoxText
              title="Trend and Competiter Analysis"
              isChecked={true}
            />
            <CheckBoxText
              title="Best Practices/State of the Art Research"
              isChecked={true}
            />
            <CheckBoxText title="Create Figma File" isChecked={false} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 my-5">
        <div className="flex items-center gap-3 pl-9">
          <span className="text-slate-400 animate-fadeUp">Design</span>
          <div
            className="animate-widthToRight h-[1px] bg-slate-200"
            style={{ animationDelay: "0.6s" }}
          ></div>
        </div>
        <div className="flex flex-col">
          <CheckBoxText title="Wireframes LF" isChecked={false} />
          <CheckBoxText title="Vistual Styles" isChecked={false} />
          <CheckBoxText title="Iconography" isChecked={false} />
          <CheckBoxText title="HF Interactive Prototype" isChecked={false} />
          <CheckBoxText title="Prepare Feedback Session" isChecked={false} />
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
