import React, { useCallback } from 'react';
import Comment from './Comment';
import commentWithToggle from "../decorators/commentWithToggle";

const CommentList = ({ comments, openItemID, toggleOpenItem  }) => {
  const handleBtnClick = useCallback(() => toggleOpenItem(), [toggleOpenItem]);

  if(!comments) return '';

  const commentElements = comments.map(comment => (
    <li key={ comment.id }>
      { openItemID && <Comment
        comment={ comment }
      >
      </ Comment> }
    </li>
  ));

  return ( <ul style={{listStyleType: 'none'}}>
    <button
      onClick={handleBtnClick}
    >
      {openItemID ? 'close' : 'open'}
    </button>
    { commentElements }
  </ul> );
}

export default commentWithToggle(CommentList);
