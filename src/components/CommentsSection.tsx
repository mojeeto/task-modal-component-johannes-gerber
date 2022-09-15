import React from "react";
import Comment from "./Comment";
import { TodoModalContext } from "./TodoModalContext";

const CommentsSection: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [data] = React.useContext(TodoModalContext);
  React.useEffect(() => {
    const target = sectionRef.current;
    if (target) {
      const scrollHeight = target.scrollHeight;
      target.scroll({
        top: scrollHeight
      });
    }
  }, [data]);
  return (
    <div
      className="flex flex-col gap-8 flex-1 py-5 max-h-[577px] overflow-y-scroll overflow-x-hidden animate-opacity"
      style={{ animationDelay: "1.5s" }}
      ref={sectionRef}
    >
      {data!.comments.map((comment, index) => {
        return <Comment key={index} {...comment} />;
      })}
    </div>
  );
};

export default CommentsSection;
