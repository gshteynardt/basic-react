import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  if(!comments) return '';

  const commentElements = comments.map(comment => (
    <li key={comment.id}>
      <Comment
        comment={comment}
      >
      </ Comment>
    </li>
  ))
  return <ul>{commentElements}</ul>
}

export default CommentList;
