import React, { useState } from "react";

interface ReactionEmojiProps {
  children: React.ReactNode;
  counter: number;
}

const ReactionEmoji: React.FC<ReactionEmojiProps> = ({ children, counter }) => {
  return (
    <div className="flex gap-1 px-1.5 bg-gray-200 rounded-md text-sm cursor-pointer select-none">
      {children}
      {
        counter !== 0 && <span className="text-gray-400">{counter}</span>
      }
    </div>
  );
};

export default ReactionEmoji;
