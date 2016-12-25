import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/Home';
import Page from './components/Page';
import pageProvider from './page-provider';

class App extends Component {
  constructor(props) {
    super(props);
    this.pageProvider = pageProvider();
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" pageProvider={this.pageProvider} component={Home}/>
        <Route path="/about/:page" pageProvider={this.pageProvider} component={Page}/>
      </Router>
    );
  }
}

export default App;
