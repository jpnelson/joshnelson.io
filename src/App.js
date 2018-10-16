import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Page from "./components/Page";
import pageProvider from "./page-provider";
import MetricsPage from "./pages/Metrics";

class App extends Component {
  constructor(props) {
    super(props);
    this.pageProvider = pageProvider();
  }
  render() {
    return (
      <Router>
        <Home path="/" pageProvider={this.pageProvider} />
        <Page path="/about/:page" pageProvider={this.pageProvider} />
        <MetricsPage path="/page/metrics" />
      </Router>
    );
  }
}

export default App;
