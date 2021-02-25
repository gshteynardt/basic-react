import React, { Component } from 'react';
import articles from './fixtures';
import ArticleList from './components/ArticleList';
import Select from 'react-select';
import Counter from "./components/Counter";
import DatePicker from "./components/DatePicker";

class App extends Component {
  state = {
    openItem: null
  }

  render() {
    return (
      <div>
        <Select
          options={this.options}
          value={this.state.openItem}
          onChange={this.handleSelect}
        />
        <DatePicker/>
        <Counter/>
        <ArticleList/>
      </div>
    )
  }

  get options() {
    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  handleSelect = (openItem) => this.setState({ openItem: openItem });
}

export default App;
