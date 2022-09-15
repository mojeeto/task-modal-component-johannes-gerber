import React from 'react';
import Comment from './Comment';
import { TodoModalContext } from './TodoModalContext';


const CommentsSection: React.FC = () => {
  const [data] = React.useContext(TodoModalContext);
  return <div className="flex-1 py-5">
    {data!.comments.map((comment, index) => {
      return <Comment key={index} {...comment} />
    })}
  </div>
}

export default CommentsSection;
