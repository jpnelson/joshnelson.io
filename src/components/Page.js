import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const PageInner = styled.div`
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const PageHeader = styled.div`
  width: 100%;
  background: white;
  color: black;
  padding: 8px;
  box-sizing: border-box;
`;
const PageImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${props => `url('${props.background}')`};
  background-size: cover;
  background-position-x: 50%;
  top: 0;
  left: 0;
`;
const PageContent = styled.div`
  font-size: 1em;
  margin-top: 8px;
`;
const PageTitle = styled.div`
  font-family: "Germania One", cursive;
  font-size: 2em;
  text-transform: uppercase;
`;
const PageBody = styled.div`
  width: 100%;
  background: white;
  color: black;
  padding: 10px;
  box-sizing: border-box;

  a {
    color: black;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const action = `
  color: black;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-position: under;
  margin: 20px 10px 20px 0;
`;

const ViewMore = styled.a`
  ${action}
  &:before {
    content: "🚀";
  }
`;

const Back = styled(Link)`
  ${action}
  &:before {
    content: "⏪";
  }
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
          <ActionContainer>
            <Back to="/">Back</Back>
            {thisPage.externalLink && (
              <ViewMore target="_blank" href={thisPage.externalLink}>
                View more
              </ViewMore>
            )}
          </ActionContainer>
          <PageContent>{thisPage.description}</PageContent>
        </PageHeader>
        <PageBody>
          <ReactMarkdown source={thisPage.body} />
        </PageBody>
      </PageInner>
    );
  }
}

Page.propTypes = {
  page: PropTypes.string
};

export default Page;
