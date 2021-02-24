import { combineReducers } from 'redux';
import counterReducer from './counter.js';
import articles from './articles.js';

export default combineReducers({
  counter: counterReducer,
  articles,
})
