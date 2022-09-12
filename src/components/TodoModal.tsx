import React from "react";
import MainSectionModal from "./MainSectionModal";
import CommentSectionModal from "./CommentSectionModal";
import { MainModalProps } from "./Types";

const TodoModal: React.FC<MainModalProps> = (props) => {
  return (
    <div className="flex gap-4 bg-white rounded-xl p-1.5">
      {/* main modal */}
      <MainSectionModal {...props} />
      <CommentSectionModal />
    </div >
  );
};

export default TodoModal;
