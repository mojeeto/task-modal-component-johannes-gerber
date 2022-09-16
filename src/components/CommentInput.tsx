import React from "react";
import Picker from "emoji-picker-react";
import { MdOutlineTagFaces } from "react-icons/md";
import { TodoModalContext } from "./TodoModalContext";
import { CommentNeededType, InputPickerStateProps, TaskDataType } from "./Types";


const CommentInput: React.FC<InputPickerStateProps> = ({ pickerInputState, setPickerInputState }) => {
  const [data, update] = React.useContext(TodoModalContext);
  const [inputValue, setInputValue] = React.useState("");
  const formRef = React.useRef<HTMLFormElement>(null);

  const onChangeValue: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const target = e.currentTarget;
    const newValue = target.value;
    setInputValue(newValue);
  };

  const setEmojiPickerState = (newPickerState: boolean) => {
    const comments = data!.comments;
    comments.forEach(comment => comment.pickerShow = false);
    const newState = {
      ...data!,
      comments: comments
    }
    update!(newState);
    setPickerInputState(newPickerState);
  }

  const onSubmit: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newComment: CommentNeededType = {
        commentId: data!.comments.length + 10,
        username: "guest",
        comment: inputValue,
        time: "Today • 1 sec",
        reacts: [],
        imageSrc: "no-image",
        pickerShow: false,
      };
      const newState: TaskDataType = {
        ...data!,
        comments: [...data!.comments, newComment],
      };
      update!(newState);
    }
    setInputValue("");
  };

  return (
    <form
      className="flex bg-white justify-between items-center px-2 py-1 border-[1px] gap-2 rounded-md relative animate-opacity select-none"
      style={{ animationDelay: "1s" }}
      onSubmit={onSubmit}
      name="comment-id"
      ref={formRef}
    >
      <textarea
        value={inputValue}
        onChange={onChangeValue}
        placeholder="Type something..."
        className="outline-none flex-1 text-slate-600 resize-none scroll-smooth"
        rows={1}
        onKeyUp={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            const form = formRef.current;
            if (form) {
              form.requestSubmit();
            }
          } else if (e.key === "Enter" && e.shiftKey) {
            setInputValue(inputValue + "\n");
            e.currentTarget.focus();
          }
        }}
        form="comment-id"
        maxLength={32}
      />
      <MdOutlineTagFaces
        className="text-slate-400 cursor-pointer"
        onClick={() => setEmojiPickerState(!pickerInputState)}
      />
      {pickerInputState && (
        <div className="absolute -top-80 left-0">
          <Picker
            disableSearchBar={true}
            onEmojiClick={(_, emojiObject) => {
              const emoji = emojiObject.emoji;
              setInputValue(inputValue + emoji);
              setEmojiPickerState(false);
            }}
          />
        </div>
      )}
    </form>
  );
};

export default CommentInput;
