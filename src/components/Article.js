import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteArticle, loadArticleById } from "../ac/index";
import CommentList from "./CommentList";
import accordion from "../decorators/accordion";
import Loader from "./Loader/Loader";

const Article = ({
  article,
  openItemID,
  toggleOpen,
  deleteArticle,
  loadArticleById
}) => {
  useEffect(() => {
    loadArticleById(article.id);
  }, [openItemID]);

  const handleBtnClick = useCallback(() => toggleOpen(article.id), [
    article.id,
    toggleOpen
  ]);

  const handleDelete = useCallback(() => deleteArticle(article.id), [
    deleteArticle,
    article.id
  ]);

  return (
    <div>
      <div>
        <h3>{article.title}</h3>
        <button onClick={handleBtnClick}>
          {openItemID ? "close" : "open"}
        </button>
        <button onClick={handleDelete}>delete me</button>
      </div>
      {openItemID && (
        <div className={"test__article_body"}>
          <section>{article.loading ? <Loader /> : article.text}</section>
          <CommentList article={article} />
        </div>
      )}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    comments: PropTypes.array,
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  openItemID: PropTypes.string,
  toggleOpen: PropTypes.func.isRequired
};

const ArticleWithAccordion = accordion(Article);

export default connect(null, { deleteArticle, loadArticleById })(
  ArticleWithAccordion
);
