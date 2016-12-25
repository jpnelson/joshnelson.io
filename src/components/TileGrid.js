import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const TileGridInner = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
`;

class TileGrid extends Component {

  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    return (
      <TileGridInner>{this.props.children}</TileGridInner>
    );
  }
}


export default TileGrid;
