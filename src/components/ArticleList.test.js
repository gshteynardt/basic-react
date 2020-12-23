import React from "react";
import {} from 'enzyme';
import ArticleList from './ArticleList.js';
import articles from '../fixtures.js';

describe('ArticleList', () => {
  it('should render article list', () => {
    <ArticleList
      articles={articles}
       />
  });
});
