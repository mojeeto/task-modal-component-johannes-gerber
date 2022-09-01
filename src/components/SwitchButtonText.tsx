import React from 'react';

interface SwitchButtonTextProps {
  buttonsTitle: string[];
}

const SwitchButtonText: React.FC<SwitchButtonTextProps> = ({ buttonsTitle }) => {
  const active = 1;
  const activeClassName = "text-slate-600 border-slate-300 bg-white border-[1.5px] rounded-lg";
  return (
    <div className="relative inline-flex gap-2">
      <div className="bg-slate-100 text-lg p-1 rounded-lg">
        {buttonsTitle.map((title, index) => (<button key={index} className={`px-4 py-1.5 text-slate-500 ${active === index && activeClassName}`} >{title}</button>))}
      </div>
    </div>
  );
}


export default SwitchButtonText;
