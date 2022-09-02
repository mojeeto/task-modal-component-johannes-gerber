import React, { useState, useRef } from 'react';

interface SwitchButtonTextProps {
  buttonsTitle: string[];
}

const SwitchButtonText: React.FC<SwitchButtonTextProps> = ({ buttonsTitle }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const boxDivRef = useRef<HTMLDivElement>(null);

  const onClickHandler = (x: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    if (boxDivRef.current) {
      const box = boxDivRef.current;
      const buttonWidth = button.clientWidth;
      box.style.width = `${buttonWidth}px`;
      box.style.left = `${button.offsetLeft}px`;
    }
    setActiveIndex(x);
  }

  return (
    <div className="relative inline-flex gap-2">
      <div className="bg-slate-100 text-lg p-1 rounded-lg relative">
        {buttonsTitle.map((title, index) => (
          <button key={index} onClick={(e) => {
            onClickHandler(index, e);
          }} className={`px-4 relative z-10 py-1.5 border-[1.5px] border-transparent ${activeIndex === index ? "text-slate-600" : "text-slate-500"}`}>
            {title}
          </button>
        ))}
        <div className="bg-white h-[43px] transition-all border-[1.5px] !border-slate-300 z-1 rounded-lg absolute w-[126px] top-1 left-1" ref={boxDivRef}></div>
      </div>
    </div>
  );
}


export default SwitchButtonText;
