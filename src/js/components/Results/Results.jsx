import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import Result from '../Result/Result';

class Results extends Component {
  constructor() {
    super();
    this.renderResults = this.renderResults.bind(this);
  }

  renderResults() {
    const { results } = this.props;
    return results.map(result => <Result result={result} key={result.objectID} />);
  }

  render() {
    return (
      <ListGroup>
        {this.renderResults()}
      </ListGroup>
    );
  }
}

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
};

Results.defaultProps = {
  results: [],
};


export default Results;
