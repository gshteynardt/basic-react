import { normalizedComments } from '../fixtures.js';

const defaultComments = normalizedComments.reduce((acc, comment) => ({...acc, [comment.id]: comment}), {});

export default (commentsState = defaultComments, action) => {
  const { type } = action;

  switch (type) {
    default:
      return commentsState;
  }

}
