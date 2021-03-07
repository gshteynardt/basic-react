import { normalizedComments } from '../fixtures.js';
import {ADD_COMMENT} from "../constants";

const defaultComments = normalizedComments.reduce((acc, comment) => ({...acc, [comment.id]: comment}), {});

export default (commentsState = defaultComments, action) => {
  const {type, payload, randomId} = action;

  switch (type) {
    case ADD_COMMENT:
      return {
        ...commentsState,
        [randomId]: {
          ...payload.comment,
          id: randomId,
        }
      };
    default:
      return commentsState;
  }
}
