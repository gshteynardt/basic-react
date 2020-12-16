import React from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

const ArticleList = ({ articles, openItemID, toggleOpen }) => {
  const articleElements = articles.map((article) => (
    <li key={article.id}>
      <Article
        isOpen={openItemID === article.id}
        article={article}
        toggleOpen={toggleOpen}
      />
    </li>
  ))
  return <ul>{articleElements}</ul>
}

export default accordion(ArticleList)
