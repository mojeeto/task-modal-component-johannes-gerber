import React from "react";
import CommentInput from "./CommentInput";
import CommentsSection from "./CommentsSection";


const CommentSectionModal: React.FC = () => {
  return (
    <div className="flex flex-col bg-slate-50 border-2 border-slate-300 rounded-lg py-2 px-3 w-[300px]">
      <div className="flex items-center justify-between text-slate-400 font-normal">
        <span>Comments</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <CommentsSection />
      <CommentInput />
    </div>
  );
};

export default CommentSectionModal;
