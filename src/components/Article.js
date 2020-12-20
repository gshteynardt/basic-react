import React, { useCallback } from 'react';
import CommentList from "./CommentList";

const Article = (props) => {
  const { article, isOpen, toggleOpen } = props;
  const handleBtnClick = useCallback(() => toggleOpen(article.id), [article.id, toggleOpen]);
  return (
    <div>
      <div>
        <h3>{article.title}</h3>
        <button
          onClick={handleBtnClick}
        >
          {isOpen ? 'close' : 'open'}
        </button>
      </div>
      {isOpen &&
      <div>
        <section>{article.text}</section>
        <CommentList
          comments={article.comments}
        />
      </div>
      }
    </div>
  )
}

export default Article;
