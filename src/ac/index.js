import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE
} from "../constants";

//action creator
export function increment() {
  return {
    type: INCREMENT
  };
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  };
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  };
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  };
}

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  };
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: "/api/article"
  };
}

export function loadArticleById(id) {
  return {
    type: LOAD_ARTICLE,
    callAPI: "/api/article"
  };
}
