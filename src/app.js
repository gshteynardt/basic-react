import React, { Component } from 'react'
import articles from './fixtures'
import ArticleList from './components/ArticleList'

class App extends Component {
  render() {
    return (
      <div>
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
