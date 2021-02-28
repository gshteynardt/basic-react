import { DELETE_ARTICLE } from '../constants';
import { normalizedComments as defaultComments } from '../fixtures.js';

export default (commentsState = defaultComments, action) => {
  const { type } = action;

  switch (type) {
    default:
      return commentsState;
  }
  
}
