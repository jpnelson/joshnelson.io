import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "@reach/router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const PageInner = styled.div`
  color: white;
  height: 100%;
`;
const PageHeader = styled.div`
  width: 100%;
  background: white;
  color: black;
  text-align: right;
  padding: 8px;
  box-sizing: border-box;
  position: relative;
`;
const PageImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${props => `url('${props.background}')`};
  background-size: cover;
  background-position-x: 50%;
  position: absolute;
  top: 0;
  left: 0;
`;
const PageContent = styled.div`
  font-size: 1em;
  margin-top: 8px;
`;
const PageTitle = styled.div`
  font-size: 2em;
  text-transform: uppercase;
`;
const PageBody = styled.div`
  width: 100%;
  position: relative;
  background: white;
  color: black;
  padding: 10px;

  a {
    color: black;
  }
`;

const action = `
  background: white;
  color: black;
  font-size: 2em;
  position: absolute;
  bottom: 1em;
  text-transform: uppercase;
  padding: 8px;
  text-decoration: underline;
`;

const ViewMore = styled.a`
  ${action} right: 0;
  border: 4px solid black;
  border-right: none;
`;

const Back = styled(Link)`
  ${action} left: 0;
  cursor: pointer;

  border: 4px solid black;
  border-left: none;
`;

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: []
    };
  }

  componentDidMount() {
    this.props.pageProvider(pages => {
      this.setState({
        pages
      });
    });
  }

  render() {
    const thisPage = this.state.pages.filter(
      page => page.id === this.props.page
    )[0];
    if (!thisPage) {
      return null;
    }
    return (
      <PageInner>
        <PageImage background={thisPage.image.url} />
        <PageHeader>
          <PageTitle>{thisPage.title}</PageTitle>
          <PageContent>{thisPage.description}</PageContent>
        </PageHeader>
        <PageBody>
          <ReactMarkdown source={thisPage.body} />
        </PageBody>
        <Back to="/">Back</Back>
        {thisPage.externalLink && (
          <ViewMore href={thisPage.externalLink}>View more</ViewMore>
        )}
      </PageInner>
    );
  }
}

Page.propTypes = {
  page: PropTypes.string
};

export default Page;
