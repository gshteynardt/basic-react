import React, { useState } from 'react'
import Article from './Article'

const ArticleList = ({ articles }) => {
  const [articleId, setArticleId] = useState(null)

  const toggleOpenArticle = (articleId) => setArticleId(articleId)
  const articleElements = articles.map((article) => (
    <li key={article.id}>
      <Article
        isOpen={articleId === article.id}
        article={article}
        toggleOpen={toggleOpenArticle}
      />
    </li>
  ))

  return <ul>{articleElements}</ul>
}

export default ArticleList
