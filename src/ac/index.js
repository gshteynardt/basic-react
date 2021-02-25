import { INCREMENT, DELETE_ARTICLE } from "../constants";

//action creator
export function increment() {
  return {
    type: INCREMENT,
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id },
  }
}
