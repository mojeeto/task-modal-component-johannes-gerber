import React from "react";
import Avatar from "./Avatar";
import MojeetoAvatar from 'mojeeto.png';

interface CommentProps {
  username: string;
  imageSrc: string;
  date: string;
  reacts: string[];
}

const Comment: React.FC = () => {
  return (
    <div className="flex gap-1 flex-col">
      <div className="flex items-center gap-3">
        <Avatar imageSrc={MojeetoAvatar} userNameForAlt="Mojeeto" />
        <span className="text-slate-700 font-medium">Mojeeto</span>
      </div>
      <div className="text-slate-600 pr-2">Just found <span className="text-purple-800">this here</span> on medium as an inspiration. Thought it could be helpful for this task...</div>
      <div className="text-slate-300 text-sm">Yesterday • 4:29 pm</div>
      <div></div>
    </div>
  );
};

export default Comment;
