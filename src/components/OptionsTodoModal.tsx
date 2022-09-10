import React from "react";
import Breadcrumb from "./Breadcrumb";
import ModalOptions from "./ModalOptions";

interface OptionsTodoModalProps {
  path?: string[];
}

const OptionsTodoModal: React.FC<OptionsTodoModalProps> = ({ path }) => {
  return (
    <div className="flex justify-between items-center pl-9 ">
      {/* breadcrumb */}
      {path !== undefined && <Breadcrumb path={path} />}
      {/* options */}
      <ModalOptions />
    </div>
  );
};

export default OptionsTodoModal;
