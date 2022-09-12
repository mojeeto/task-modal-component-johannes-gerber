import React from "react";
import { MdOutlineTagFaces } from "react-icons/md";

const CommentInput: React.FC = () => {
  return (
    <div className="flex bg-white justify-between items-center px-2 py-1 border-[1px] gap-2 rounded-md">
      <input type="text" placeholder="Type something..." className="outline-none flex-1 text-slate-600" />
      <MdOutlineTagFaces className="text-slate-400" />
    </div>
  );
};

export default CommentInput;
