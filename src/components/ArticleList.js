import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { articlesLoadingSelector, filtratedArticles } from "../selectors";
import Article from "./Article";
import { Loader } from "./Loader/Loader";
import { loadAllArticles } from "../ac";

const ArticleList = ({ articles, fetchData, loading }) => {
  useEffect(() => {
    fetchData && fetchData();
  }, [fetchData]);

  const articleElements = articles.map(article => (
    <li key={article.id} className={"test__article-list--item"}>
      <Article article={article} />
    </li>
  ));
  if (loading) return <Loader />;

  return <ul>{articleElements}</ul>;
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default connect(
  state => {
    return {
      articles: filtratedArticles(state),
      loading: articlesLoadingSelector(state)
    };
  },
  { fetchData: loadAllArticles }
)(ArticleList);
