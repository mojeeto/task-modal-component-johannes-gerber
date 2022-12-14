import React from "react";
import CommentInput from "./CommentInput";
import CommentsSection from "./CommentsSection";


const CommentSectionModal: React.FC = () => {
  const [inputEmojiPicker, setInputEmojiPicker] = React.useState<boolean>(false);
  return (
    <div className="flex flex-col bg-slate-50 border-2 border-slate-300 rounded-lg py-2 px-3 w-[300px] relative">
      <div className="flex items-center justify-between text-slate-400 font-normal animate-opacity" style={{ animationDelay: "1s" }}>
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
      <CommentsSection pickerInputState={inputEmojiPicker} setPickerInputState={setInputEmojiPicker} />
      <CommentInput pickerInputState={inputEmojiPicker} setPickerInputState={setInputEmojiPicker} />
    </div>
  );
};

export default CommentSectionModal;
