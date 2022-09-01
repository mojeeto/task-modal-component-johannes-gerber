import React from 'react';
import Breadcrumb from './Breadcrumb';
import ModalOptions from './ModalOptions';
import SwitchButtonText from './SwitchButtonText';

interface TodoModalProps {
  path?: Array<string>;
  title?: string;
}

const TodoModal: React.FC<TodoModalProps> = ({ path, title = "Untitled" }) => {
  return <div className="bg-white p-5 rounded-xl w-[600px]">
    {/* main modal */}
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        {/* breadcrumb */}
        {path !== undefined && <Breadcrumb path={path} />}
        {/* options */}
        <ModalOptions />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-semibold text-stone-700">{title}</h2>
        <SwitchButtonText buttonsTitle={['Describtion', 'Checklist']} />
      </div>
    </div>
  </div>;
}


export default TodoModal;
