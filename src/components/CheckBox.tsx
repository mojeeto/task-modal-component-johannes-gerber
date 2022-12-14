import React from "react";
import { FiCheck } from "react-icons/fi";

interface CheckBoxProps {
  isChecked: boolean;
  className?: string;
  onClick?: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, className, onClick }) => {
  const notchecked = "border-slate-300 text-transparent";
  const checked = "border-blue-600 bg-blue-600 text-white";
  return (
    <div
      className={`border-2 flex items-center justify-center rounded-md cursor-pointer ${isChecked ? checked : notchecked
        } ${className}`}
      onClick={onClick}
    >
      <FiCheck />
    </div>
  );
};

export default CheckBox;
