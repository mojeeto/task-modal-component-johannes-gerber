import React, { useState } from "react";
import Avatar from "./Avatar";
import ReactionEmoji from "./ReactionEmoji";
import Picker from "emoji-picker-react";
import { MdOutlineTagFaces } from "react-icons/md";
import { CommentNeededType } from "./Types";

const Comment: React.FC<CommentNeededType> = ({ username, imageSrc, comment, time, reacts }) => {
  const [useEmoji, setUseEmoji] = useState<boolean>(false);

  return (
    <div className="flex gap-1.5 flex-col">
      <div className="flex items-center gap-3">
        <Avatar imageSrc={imageSrc} userNameForAlt={username} />
        <span className="text-slate-700 font-medium capitalize">{username}</span>
      </div>
      <div className="text-slate-600 pr-2">
        Just found{" "}
        <a
          className="text-purple-800 hover:underline"
          href="https://dribbble.com/shots/17165930-Task-Modal-Component"
          target="_blank"
          rel="noreferrer noopener"
        >
          this here
        </a>{" "}
        on Dribbble as React Project idea. Thought it could be helpful for my
        task...
      </div>
      <div className="text-slate-400 text-sm">{time}</div>
      <div className="flex gap-1 items-center">
        {reacts.map((react, index) => (
          <ReactionEmoji key={index} counter={react.count}>{react.emoji}</ReactionEmoji>
        ))}
        <div className="ml-1 relative">
          <MdOutlineTagFaces
            className="text-slate-400 cursor-pointer"
            onClick={() => {
              setUseEmoji(prevState => !prevState);
            }}
          />
          {useEmoji && (
            <div className="absolute">
              <Picker
                onEmojiClick={(_, emojiObject) => {
                  const newEmoji = emojiObject.emoji;
                  // Todo:: update emoji count
                  setUseEmoji(false);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
