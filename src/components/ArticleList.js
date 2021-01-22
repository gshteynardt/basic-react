import React from 'react';
import Article from './Article';
import PropTypes from "prop-types";

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

export default ArticleList;
