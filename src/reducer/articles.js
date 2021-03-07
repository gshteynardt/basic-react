import {ADD_COMMENT, DELETE_ARTICLE} from '../constants';
import { normalizedArticles as defaultArticles } from '../fixtures.js';
import { Record } from 'immutable';
import { arrToMap } from './utils.js';

const ArticleRecord = Record({
  title: null,
  id: null,
  text: null,
  date: null,
  comments: [],
});

export default (articlesState = arrToMap(defaultArticles, ArticleRecord), action) => {
  const { type, payload, randomId } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.delete(payload.id);

    case ADD_COMMENT:
      return articlesState.updateIn([payload.articleId, 'comments'], comments => comments.concat(randomId));
    default:
      return articlesState;
  }
}

