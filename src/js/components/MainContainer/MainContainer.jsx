import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
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
    this.renderResults = this.renderResults.bind(this);
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

  renderResults() {
    const { results, query, requestsOut } = this.state;

    if (requestsOut > 0) {
      return (
        <Alert variant="primary">
          Looking for your news ...
        </Alert>
      );
    }

    if (results.length > 0) {
      return <Results results={results} />;
    }

    if (results.length < 1 && query !== '' && requestsOut === 0) {
      return (
        <Alert variant="danger">
          No news matching your query :/
        </Alert>
      );
    }

    return null;
  }

  render() {
    return (
      <Container>
        <SearchField search={this.search} />
        {this.renderResults()}
      </Container>
    );
  }
}

export default MainContainer;
