import React from 'react';
import Comment from './Comment';
import { CommentNeededType } from './Types';

interface CommentsSectionProps {
  comments: CommentNeededType[];
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  return <div className="flex-1 py-5">
    {comments.map((comment, index) => {
      return <Comment key={index} {...comment} />
    })}
  </div>
}

export default CommentsSection;
