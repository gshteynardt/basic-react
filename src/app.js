import React, { Component } from "react";
import { connect } from "react-redux";

import Select from "./components/Select";
import ArticleList from "./components/ArticleList";
import Counter from "./components/Counter";
import DatePicker from "./components/DatePicker";

class App extends Component {
  state = {
    openItem: null
  };

  render() {
    return (
      <div>
        <Select />
        <DatePicker />
        <Counter />
        <ArticleList />
      </div>
    );
  }
  handleSelect = openItem => this.setState({ openItem: openItem });
}

export default connect(state => ({
  options: state.options
}))(App);
