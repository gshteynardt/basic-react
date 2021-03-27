import { createSelector } from "reselect";

export const articlesMapSelector = state => state.articles.entities;
export const articlesLoadingSelector = state => state.articles.loading;
export const commentsSelector = state => state.comments;
export const dateRangeSelector = state => state.filters.dateRange;
export const selectedSelector = state => state.filters.selected;

export const idSelector = (_, props) => props.id;
export const articlesListSelector = createSelector(
  articlesMapSelector,
  articlesMap => articlesMap.valueSeq().toJS()
);

export const filtratedArticles = createSelector(
  articlesListSelector,
  selectedSelector,
  dateRangeSelector,
  (articles, selected, dateRange) => {
    const { from, to } = dateRange;

    return articles.filter(article => {
      const published = Date.parse(article.date);
      return (
        (!selected.length ||
          selected.find(selected => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      );
    });
  }
);

export const createCommentSelector = () =>
  createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments.get(id);
  });
