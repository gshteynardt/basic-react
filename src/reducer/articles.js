import { DELETE_ARTICLE } from '../constants';
import defaultArticles from '../fixtures.js';

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return []
  }

  return articlesState;
}
