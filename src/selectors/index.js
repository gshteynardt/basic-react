import { createSelector } from "reselect";

export const articlesSelector = state => state.articles;
export const commentsSelector = state => state.comments;
export const dateRangeSelector = state => state.filters.dateRange;
export const selectedSelector = state => state.filters.selected;

export const idSelector = (_, props) => props.id;

export const filtereatedArticles = createSelector(selectedSelector, dateRangeSelector, articlesSelector,
  (dateRange, selected, articles) => {
  const {
     from, to
  } = dateRange;

  return  articles.filter(article => {
    const published = Date.parse(article.date);
    return (
      (!selected.length ||
        selected.find(selected => selected.value === article.id)) &&
      (!from || !to || (published > from && published < to))
    )
  })
})

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => {
  return comments.find(comment => comment.id === id);
})
