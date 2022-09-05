import React from 'react';
import { FiCheck } from 'react-icons/fi';


interface CheckBoxProps {
  isChecked: boolean;
}


const CheckBox: React.FC<CheckBoxProps> = ({
  isChecked
}) => {
  const notchecked = "border-slate-300";
  const checked = "border-blue-600 bg-blue-600"
  return <div className={`border-2 flex items-center justify-center rounded-md cursor-pointer ${isChecked ? checked : notchecked}`}>
    <FiCheck className="text-white" />
  </div >
}


export default CheckBox;
