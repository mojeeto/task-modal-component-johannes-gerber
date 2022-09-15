import React from "react";
import MainSectionModal from "./MainSectionModal";
import CommentSectionModal from "./CommentSectionModal";

const TodoModal: React.FC = () => {
  return (
    <div className="flex gap-4 bg-white rounded-xl p-1.5">
      {/* main modal */}
      <MainSectionModal />
      <CommentSectionModal />
    </div >
  );
};

export default TodoModal;
