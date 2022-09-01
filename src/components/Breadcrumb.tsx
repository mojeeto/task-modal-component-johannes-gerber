import React from 'react';

interface BreadcrumbProps {
  path: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {

  return <div className="flex">
    {path.map((p, index) => (
      <div key={index} className="text-slate-400">
        {index !== 0 && <span className="mx-1 text-slate-300">/</span>}{p}
      </div>)
    )}
  </div>;
}


export default Breadcrumb;
