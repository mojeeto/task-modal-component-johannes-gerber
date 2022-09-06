import React from "react";

interface InputTextProps {
  baseTitle: string;
  title: string;
  onChange: (e: string) => void;
  onBlur: () => void;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
}

const InputText: React.FC<InputTextProps> = ({
  baseTitle,
  title,
  onChange,
  onBlur,
  onFocus,
}) => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    if (target) {
      const key = "submit-type";
      if (target.hasAttribute(key)) {
        const type = target.getAttribute(key);
        if (type === "save") {
          onChange(title);
        } else if (type === "ignore") {
          onChange(baseTitle);
        }
      }
    }
    onBlur();
  };

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target) {
      onChange(target.value);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={onChangeHandler}
        className={`disabled:bg-transparent w-[100%] px-2 py-1 border-none outline-blue-400`}
        onFocus={onFocus}
        autoFocus={true}
      />
      <button
        className="text-slate-500 bg-white px-4 py-1 border-2 border-slate-200 rounded-md"
        onClick={onClickHandler}
        submit-type="save"
      >
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
      <button
        className="text-slate-500 bg-white px-4 py-1 border-2 border-slate-200 rounded-md"
        onClick={onClickHandler}
        submit-type="ignore"
      >
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
