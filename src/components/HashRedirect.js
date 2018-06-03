import React, { Component } from "react";
import Tile from "./Tile";
import TileGrid from "./TileGrid";

function makeLoadingGrid(n) {
  const loadingGrid = [];
  for (let i = 0; i < n; i++) {
    loadingGrid.push(<Tile key={i} isVisible={false} />);
  }
  return loadingGrid;
}

class Home extends Component {
  render() {
    if (window.path) return null;
  }
}

export default HashRedirect;
