import React, { useState } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

const ArticleList = (articles) => {
  const [articleId, setArticleId] = useState(null)

  const articleElements = articles.map((article) => (
    <li key={article.id}>
      <Article
        isOpen={articleId === article.id}
        article={article}
        toggleOpen={setArticleId}
      />
    </li>
  ))
  return <ul>{articleElements}</ul>
}

export default accordion(ArticleList)
