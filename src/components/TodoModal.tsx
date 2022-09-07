import React, { Dispatch, SetStateAction } from "react";
import Breadcrumb from "./Breadcrumb";
import CircleProgress from "./CircleProgress";
import ModalOptions from "./ModalOptions";
import SwitchButtonText from "./SwitchButtonText";
import { BiPlus } from "react-icons/bi";
import CheckBoxText from "./CheckBoxText";

export type DataType = {
  id: number;
  title: string;
  category: "planning" | "design";
  isChecked: boolean;
};

interface TodoModalProps {
  path?: Array<string>;
  title?: string;
  data?: DataType[];
  setter?: Dispatch<SetStateAction<DataType[]>> | null;
}

const TodoModal: React.FC<TodoModalProps> = ({
  path,
  title = "Untitled",
  data = [],
  setter = null,
}) => {
  const planning = data.filter((d) => d.category === "planning");
  const design = data.filter((d) => d.category === "design");

  const update = (id: number, newTitle: string, isChecked: boolean) => {
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
            {planning.map((plan, index) => (
              <CheckBoxText
                id={plan.id}
                title={plan.title}
                isChecked={plan.isChecked}
                key={index}
                update={update}
              />
            ))}
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
          {design.map((d, index) => (
            <CheckBoxText
              id={d.id}
              title={d.title}
              isChecked={d.isChecked}
              key={index}
              update={update}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
