import React, { useCallback } from "react";
import CommentList from "./CommentList";
import accordion from "../decorators/accordion";

const Article = ({ article, openItemID, toggleOpen }) => {

  const handleBtnClick = useCallback(() => toggleOpen(article.id), [article.id, toggleOpen]);

  return (
    <div>
      <div>
        <h3>{article.title}</h3>
        <button
          onClick={handleBtnClick}
        >
          {openItemID ? 'close' : 'open'}
        </button>
      </div>
      {openItemID &&
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
const ArticleWithAccordion = accordion(Article);

export default ArticleWithAccordion;
