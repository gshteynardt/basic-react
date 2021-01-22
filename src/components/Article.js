import React, { useCallback } from "react";
import PropTypes from "prop-types";
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
      <div className={'test__article_body'}>
        <section>{article.text}</section>
          <CommentList
            comments={article.comments}
          />
      </div>
      }
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    comments: PropTypes.array,
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  openItemID: PropTypes.string,
  toggleOpen: PropTypes.func.isRequired,
}

const ArticleWithAccordion = accordion(Article);

export default ArticleWithAccordion;
