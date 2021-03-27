import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCommentSelector } from "../selectors";

const Comment = ({ comment }) => {
  const { text, user } = comment;

  return (
    <>
      <h3>by {user}</h3>
      <p>{text}</p>
    </>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  })
};

const createMapStateToProps = () => {
  const commentSelector = createCommentSelector();

  return (state, ownProps) => ({
    comment: commentSelector(state, ownProps)
  });
};

export default connect(createMapStateToProps)(Comment);
