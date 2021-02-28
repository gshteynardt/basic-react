import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Article from './Article';

const ArticleList = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={article.id} className={'test__article-list--item'}>
      <Article
        article={article}
      >
      </ Article>
    </li>
  ))
  return <ul>{articleElements}</ul>
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default connect(state => {
  const {
    selected,
    dateRange: { from, to }
  } = state.filters;

  const filtratedArticles = state.articles.filter(article => {
    const published = Date.parse(article.date);
    return (
      (!selected.length ||
        selected.find(selected => selected.value === article.id)) &&
      (!from || !to || (published > from && published < to))
    )
  })

  return {
    articles: filtratedArticles,
  }

})(ArticleList);
