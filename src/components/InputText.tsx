import React from "react";

interface InputTextProps {
  title: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
}

const InputText: React.FC<InputTextProps> = ({
  title,
  onChange,
  onBlur,
  onFocus,
}) => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={onChange}
        className={`disabled:bg-transparent w-[100%] px-2 py-1 border-none outline-blue-400`}
        onBlur={onBlur}
        onFocus={onFocus}
        autoFocus={true}
      />
      <button className="text-slate-500 bg-white px-4 py-1 border-2 border-slate-200 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </button>
      <button className="text-slate-500 bg-white px-4 py-1 border-2 border-slate-200 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default InputText;
