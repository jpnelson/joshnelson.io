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
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      isLoaded: false,
      hasPassedMinLoadTime: false
    };
  }

  componentDidMount() {
    this.props.pageProvider(pages => {
      this.setState({
        pages,
        isLoaded: true
      });
    });
  }

  render() {
    const { pages, isLoaded } = this.state;
    if (!isLoaded) {
      return <TileGrid>{makeLoadingGrid(12)}</TileGrid>;
    }
    pages.sort((a, b) => (a.weight < b.weight ? -1 : 1));

    return (
      <TileGrid>
        {pages.map((page, i) => {
          return (
            <Tile
              key={i}
              background={page.image.url}
              isVisible
              flipDelay={500 + i * 200}
              page={page.id}
            >
              {page.title}
            </Tile>
          );
        })}
      </TileGrid>
    );
  }
}

export default Home;
