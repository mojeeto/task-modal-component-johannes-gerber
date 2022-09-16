import React, { useContext } from "react";
import Avatar from "./Avatar";
import ReactionEmoji from "./ReactionEmoji";
import Picker from "emoji-picker-react";
import { MdOutlineTagFaces } from "react-icons/md";
import {
  CommentNeededType,
  InputPickerStateProps,
  TaskDataType,
} from "./Types";
import { TodoModalContext } from "./TodoModalContext";

const Comment: React.FC<CommentNeededType & InputPickerStateProps> = ({
  commentId,
  username,
  imageSrc,
  comment,
  time,
  reacts,
  pickerShow,
  setPickerInputState,
}) => {
  const [data, updateData] = useContext(TodoModalContext);

  const updateComment = (newEmoji: string, counter: number = 0) => {
    const newComments = data!.comments.map((comment) => {
      if (comment.commentId === commentId) {
        if (comment.reacts.filter((react) => react.emoji === newEmoji).length) {
          comment.reacts.map((react) => {
            if (react.emoji === newEmoji) {
              react.count = counter;
            }
            return react;
          });
        } else {
          comment.reacts.push({ emoji: newEmoji, count: 0 });
        }
      }
      return comment;
    });
    const newState: TaskDataType = {
      ...data!,
      comments: newComments,
    };
    updateData!(newState);
  };

  const pickerUpdate = (newPickerState: boolean) => {
    const comments = data!.comments;
    comments.forEach((comment) => {
      if (comment.commentId === commentId) {
        comment.pickerShow = newPickerState;
        if (newPickerState) {
          setPickerInputState(false);
        }
      } else {
        comment.pickerShow = false;
      }
    });
    const newState: TaskDataType = {
      ...data!,
      comments: comments,
    };
    updateData!(newState);
  };

  return (
    <div className="flex gap-1.5 flex-col">
      <div className="flex items-center gap-3">
        <Avatar imageSrc={imageSrc} userNameForAlt={username} />
        <span className="text-slate-700 font-medium capitalize">
          {username}
        </span>
      </div>
      <div className="text-slate-600 break-words">{comment}</div>
      <div className="text-slate-400 text-sm">{time}</div>
      <div className="flex gap-1 items-center relative">
        {reacts.map((react, index) => (
          <ReactionEmoji
            key={index}
            counter={react.count}
            onUpdate={() => {
              updateComment(react.emoji, react.count + 1);
            }}
          >
            {react.emoji}
          </ReactionEmoji>
        ))}
        <div className="ml-1">
          <MdOutlineTagFaces
            className="text-slate-400 cursor-pointer"
            onClick={() => {
              pickerUpdate(!pickerShow);
            }}
          />
          {pickerShow && (
            <div className="absolute left-0 z-10">
              <Picker
                disableSearchBar={true}
                onEmojiClick={(_, emojiObject) => {
                  const newEmoji = emojiObject.emoji;
                  updateComment(newEmoji, 0);
                  pickerUpdate(false);
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
