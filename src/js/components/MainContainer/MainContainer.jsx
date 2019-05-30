import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import SearchField from '../SearchField/SearchField';
import Results from '../Results/Results';
import HackerNewsService from '../../services/HackerNews.service';

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
      requestsOut: 0,
    };

    this.search = this.search.bind(this);
  }

  search(q) {
    this.setState(prevState => ({
      requestsOut: prevState.requestsOut + 1,
      query: q,
    }));

    HackerNewsService.getSearch(q)
      .then((data) => {
        this.setState(prevState => ({
          requestsOut: prevState.requestsOut - 1,
        }), this.updateResults(q, data.hits));
      })
      .catch(() => {
        this.setState(prevState => ({
          requestsOut: prevState.requestsOut - 1,
        }));
      });
  }

  updateResults(q, results) {
    return () => {
      const { query, requestsOut } = this.state;
      if (q === query && requestsOut === 0) {
        this.setState({ results });
      }
    };
  }

  render() {
    const { results } = this.state;

    return (
      <Container>
        <SearchField search={this.search} />
        <Results results={results} />
      </Container>
    );
  }
}

export default MainContainer;
