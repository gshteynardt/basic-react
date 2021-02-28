import { DELETE_ARTICLE } from '../constants';
import { normalizedArticles as defaultArticles } from '../fixtures.js';

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter( article => article.id !== payload.id)
  }

  return articlesState;
}

