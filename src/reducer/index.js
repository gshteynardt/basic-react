import { combineReducers } from 'redux';

import counterReducer from './counter.js';
import articles from './articles.js';
import filters from './filters.js';

export default combineReducers({
  counter: counterReducer,
  articles,
  filters,
})
