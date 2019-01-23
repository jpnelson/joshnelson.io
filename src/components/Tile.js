import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { Link } from "@reach/router";

const margin = 8;
const TileInner = styled.div`
  box-sizing: border-box;
  margin: ${margin}px;
  border: 4px solid black;
  width: calc(50% - ${margin * 2}px);
  height: 25vh;
  @media (min-width: 1024px) {
    width: calc(25% - ${margin * 2}px);
  }
  position: relative;
  perspective: 1000px;
`;

const tileFrontBack = delay => `
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 250ms ${delay}ms;
`;

const pulsing = keyframes`
  from {
    background: #1b1b1b;
  }

  to {
    background: #0e0e0e;
  }
`;

const TileBack = styled.div`
  ${props =>
    tileFrontBack(
      props.delay
    )} animation: ${pulsing} 1s alternate ease-in-out infinite;
  transform: rotateY(${props => (props.isFlippedToFront ? 0 : 180)}deg);
`;

const TileFront = styled.div`
  ${props => tileFrontBack(props.delay)} background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => `url('${props.background}?w=500')`};
  transform: rotateY(${props => (props.isFlippedToFront ? 0 : -180)}deg);
  overflow: hidden;
`;

const TileCaption = styled.div`
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  background: white;
  color: black;
  padding: 4px;
  text-transform: uppercase;
  font-family: "Germania One", cursive;
  font-size: 1em;
  text-align: right;
  transition: transform 750ms ${props => props.delay + 250}ms;
  transform: ${props =>
    props.isVisible ? "translateY(0)" : "translateY(100%)"};
`;

const TileLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

class Tile extends Component {
  static propTypes = {
    children: PropTypes.node,
    isVisible: PropTypes.bool,
    background: PropTypes.string
  };
  render() {
    const { isVisible, background, children, page, flipDelay } = this.props;
    return (
      <TileInner>
        <TileBack delay={flipDelay} isFlippedToFront={!isVisible} />
        <TileLink to={`/about/${page}`}>
          <TileFront
            delay={flipDelay}
            isFlippedToFront={isVisible}
            background={background}
          >
            <TileCaption delay={flipDelay} isVisible={isVisible}>
              {children}
            </TileCaption>
          </TileFront>
        </TileLink>
      </TileInner>
    );
  }
}

export default Tile;
