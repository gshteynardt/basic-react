import React, { useCallback } from "react";
import Comment from "./Comment";
import commentWithToggle from "../decorators/commentWithToggle";
import PropTypes from "prop-types";
import CommentForm from "./Form/Form";

const CommentList = ({ openItemID, toggleOpenItem, article }) => {
  const handleBtnClick = useCallback(() => toggleOpenItem(), [toggleOpenItem]);
  const { comments, id } = article;

  if (!comments || !comments.length) return "";

  const commentElements = comments.map(id => (
    <li key={id}>{openItemID && <Comment id={id} />}</li>
  ));

  return (
    <ul style={{ listStyleType: "none" }}>
      <button onClick={handleBtnClick}>
        {openItemID ? "close comments" : "open comments"}
      </button>
      {commentElements}
      <CommentForm articleId={id} />
    </ul>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array,
  openItemId: PropTypes.bool,
  toggleOpenItem: PropTypes.func.isRequired
};

export default commentWithToggle(CommentList);
