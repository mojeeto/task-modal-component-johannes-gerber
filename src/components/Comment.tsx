import React, { useState, useContext } from "react";
import Avatar from "./Avatar";
import ReactionEmoji from "./ReactionEmoji";
import Picker from "emoji-picker-react";
import { MdOutlineTagFaces } from "react-icons/md";
import { CommentNeededType, TaskDataType } from "./Types";
import { TodoModalContext } from "./TodoModalContext";

const Comment: React.FC<CommentNeededType> = ({ commentId, username, imageSrc, comment, time, reacts }) => {
  const [useEmoji, setUseEmoji] = useState<boolean>(false);
  const [data, updateData] = useContext(TodoModalContext);


  const updateComment = (newEmoji: string, counter: number = 0) => {
    const newComments = data!.comments.map(comment => {
      if (comment.commentId === commentId) {
        if (comment.reacts.filter(react => react.emoji === newEmoji).length) {
          comment.reacts.map(react => {
            if (react.emoji === newEmoji) {
              react.count = counter;
            }
            return react;
          })
        }
        else {
          comment.reacts.push({ emoji: newEmoji, count: 0 });
        }
      }
      return comment;
    });
    const newState: TaskDataType = {
      ...data!,
      comments: newComments,
    }
    updateData!(newState);
  }

  return (
    <div className="flex gap-1.5 flex-col">
      <div className="flex items-center gap-3">
        <Avatar imageSrc={imageSrc} userNameForAlt={username} />
        <span className="text-slate-700 font-medium capitalize">{username}</span>
      </div>
      <div className="text-slate-600 pr-2">
        {comment}
      </div>
      <div className="text-slate-400 text-sm">{time}</div>
      <div className="flex gap-1 items-center">
        {reacts.map((react, index) => (
          <ReactionEmoji key={index} counter={react.count} onUpdate={() => {
            updateComment(react.emoji, react.count + 1);
          }}>{react.emoji}</ReactionEmoji>
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
                  updateComment(newEmoji, 0);
                  // Todo:: update emoji count
                  //   const newComments = data!.comments.map(comment => {
                  //     if (comment.commentId === commentId) {
                  //       comment.reacts.push({ emoji: newEmoji, count: 0 });
                  //     }
                  //     return comment;
                  //   });
                  //   const newState: TaskDataType = {
                  //     ...data!,
                  //     comments: newComments,
                  //   }
                  //   updateData!(newState);
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
