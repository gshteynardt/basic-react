import {ADD_COMMENT, DELETE_ARTICLE} from '../constants';
import { normalizedArticles as defaultArticles } from '../fixtures.js';

function arrToMap (arr) {
  return arr.reduce((acc, comment) => ({...acc, [comment.id]: comment}), {});
};

export default (articlesState = arrToMap(defaultArticles), action) => {
  const { type, payload, randomId } = action;

  switch (type) {
    case DELETE_ARTICLE:
      const articlesCopy = { ...articlesState };
      delete articlesCopy[payload.id];
      return articlesCopy;

    case ADD_COMMENT:
      const article = articlesState[payload.articleId];
      return {
        ...articlesState,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId),
        }
      }
    default:
      return articlesState;
  }
}

