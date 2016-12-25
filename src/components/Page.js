import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

const PageInner = styled.div`
  color: white;
  height: 100%;
`;
const PageHeader = styled.div`
  width: 100%;
  background: white;
  color: black;
  position: absolute;
  top: 0;
  text-align: right;
  padding: 8px;
  box-sizing: border-box;
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
  ${action}
  right: 0;
`;

const Back = styled(Link)`
  ${action}
  left: 0;
  cursor: pointer;
`;

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
    }
  }

  componentDidMount() {
    this.props.route.pageProvider((pages) => {
      this.setState({
        pages, 
      });
    });
  }

  render() {
    const thisPage = this.state.pages.filter((page) => page.id === this.props.params.page)[0];
    if (!thisPage) {
      return null;
    }
    return (
      <PageInner>
        <PageImage background={thisPage.image.url} />
        <PageHeader>
          <PageTitle>{thisPage.title}</PageTitle>
          <PageContent>
            {thisPage.description}
          </PageContent>
        </PageHeader>
        <Back to="/">Back</Back>
        <ViewMore href={thisPage.externalLink}>View more</ViewMore>
      </PageInner>
    );
  }
}

Page.propTypes = {
  page: PropTypes.string,
};

export default Page;
