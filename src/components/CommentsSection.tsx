import React, { useRef, useContext, useEffect } from "react";
import Comment from "./Comment";
import { TodoModalContext } from "./TodoModalContext";
import { InputPickerStateProps } from "./Types";

const CommentsSection: React.FC<InputPickerStateProps> = (props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [data] = useContext(TodoModalContext);
  useEffect(() => {
    const target = sectionRef.current;
    if (target) {
      const scrollHeight = target.scrollHeight;
      target.scroll({
        top: scrollHeight
      });
    }
  }, [data!.comments.length]);
  return (
    <div
      className="flex flex-col gap-8 flex-1 py-5 max-h-[577px] overflow-y-scroll overflow-x-hidden animate-opacity"
      style={{ animationDelay: "1.5s" }}
      ref={sectionRef}
    >
      {data!.comments.map((comment, index) => {
        return <Comment key={index} {...comment} {...props} />;
      })}
    </div>
  );
};

export default CommentsSection;
