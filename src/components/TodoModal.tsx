import React from 'react';
import Breadcrumb from './Breadcrumb';
import ModalOptions from './ModalOptions';

interface TodoModalProps {
  path?: Array<string>;
}

const TodoModal: React.FC<TodoModalProps> = ({ path }) => {
  return <div className="bg-white p-5 rounded-xl w-[600px]">
    {/* main modal */}
    <div className="flex justify-between items-center">
      {/* breadcrumb */}
      {path !== undefined && <Breadcrumb path={path} />}
      {/* options */}
      <ModalOptions />
    </div>
  </div>;
}


export default TodoModal;
