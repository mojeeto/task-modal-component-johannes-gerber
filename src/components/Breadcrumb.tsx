import React from 'react';

interface BreadcrumbProps {
  path: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {

  return <div className="flex">
    {path.map((p, index) => {
      return (
        <div key={index} className={`text-slate-400 animate-fadeUp opacity-0 top-[5px]`} style={{ animationDelay: `0.${index + 1}s` }}>
          {index !== 0 && <span className="mx-1 text-slate-300">/</span>}{p}
        </div>
      )
    })}
  </div>;
}


export default Breadcrumb;
