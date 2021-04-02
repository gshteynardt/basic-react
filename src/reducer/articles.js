import { Record } from "immutable";

import {
  ADD_COMMENT,
  DELETE_ARTICLE,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  SUCCESS,
  START
} from "../constants";
import { arrToMap } from "./utils.js";

const ArticleRecord = Record({
  id: null,
  text: null,
  title: null,
  date: null,
  loading: false,
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

    case LOAD_ARTICLE + START:
      return articlesState.setIn(["entities", payload.id, "loading"], true);

    case LOAD_ARTICLE + SUCCESS:
      return articlesState.setIn(
        ["entities", payload.id],
        new ArticleRecord(response)
      );

    default:
      return articlesState;
  }
};
