import React from "react";

interface InputTextProps {
  title: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
}

const InputText: React.FC<InputTextProps> = ({ title, onChange, onBlur, onFocus }) => {
  return (
    <input
      type="text"
      value={title}
      onChange={onChange}
      className={`disabled:bg-transparent w-[100%]`}
      onBlur={onBlur}
      onFocus={onFocus}
      autoFocus={true}
    />
  );
};

export default InputText;
