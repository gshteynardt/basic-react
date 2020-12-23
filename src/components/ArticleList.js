import React from 'react';
import Article from './Article';

import PropTypes from "prop-types";

const ArticleList = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={article.id}>
      <Article
        article={article}
      >
      </ Article>
    </li>
  ))
  return <ul>{articleElements}</ul>
}

ArticleList.propTypes = {
  articles: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired,
};

export default ArticleList;
