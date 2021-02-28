import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

const Comment = ({ comment }) => {
  console.log(comment);
const { text, user } = comment;

  return (
    <>
      <h3>by {user}</h3>
      <p>{text}</p>
    </>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }),
}

export default connect((state, ownProps) => ({
  comment: state.comments.find(comment => comment.id === ownProps.id),
}))(Comment);
