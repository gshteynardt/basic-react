import { normalizedComments } from "../fixtures.js";
import { ADD_COMMENT } from "../constants";
import { arrToMap } from "./utils.js";

const defaultComments = arrToMap(normalizedComments);

export default (commentsState = defaultComments, action) => {
  const { type, payload, randomId } = action;

  switch (type) {
    case ADD_COMMENT:
      return commentsState.set(randomId, {
        ...payload.comment,
        id: randomId
      });

    default:
      return commentsState;
  }
};
