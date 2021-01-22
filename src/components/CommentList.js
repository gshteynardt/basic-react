import React, { useCallback } from 'react';
import Comment from './Comment';
import commentWithToggle from "../decorators/commentWithToggle";
import PropTypes from "prop-types";

const CommentList = ({ comments, openItemID, toggleOpenItem  }) => {
  const handleBtnClick = useCallback(() => toggleOpenItem(), [toggleOpenItem]);

  if(!comments || comments.length) return '';

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
      {openItemID ? 'close comments' : 'open comments'}
    </button>
    { commentElements }
  </ul> );
}

CommentList.propTypes = {
  comments: PropTypes.array,
  openItemId: PropTypes.bool,
  toggleOpenItem: PropTypes.func.isRequired,
}

export default commentWithToggle(CommentList);
