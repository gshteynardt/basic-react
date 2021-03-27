import {
  ADD_COMMENT,
  DELETE_ARTICLE,
  LOAD_ALL_ARTICLES,
  SUCCESS,
  START
} from "../constants";
import { Record } from "immutable";
import { arrToMap } from "./utils.js";

const ArticleRecord = Record({
  title: null,
  id: null,
  text: null,
  date: null,
  comments: []
});

const ReducerRecord = Record({
  entities: arrToMap([], ArticleRecord),
  loading: false,
  loaded: false,
  error: null
});

export default (articlesState = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.deleteIn(["entities", payload.id]);

    case ADD_COMMENT:
      return articlesState.updateIn(
        ["entities", payload.articleId, "comments"],
        comments => comments.concat(randomId)
      );

    case LOAD_ALL_ARTICLES + START:
      return articlesState.set("loading", true);

    case LOAD_ALL_ARTICLES + SUCCESS:
      return articlesState
        .set("entities", arrToMap(response, ArticleRecord))
        .set("loading", false)
        .set("loaded", true);

    default:
      return articlesState;
  }
};
