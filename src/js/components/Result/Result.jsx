import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

function Result(props) {
  const { result } = props;
  return (
    <ListGroup.Item>
      <a href={result.url}>
        {result.title}
      </a>
      {' '}
      -
      {' '}
      {result.author}
      {' '}
      -
      {' '}
      {result.points}
    </ListGroup.Item>
  );
}

Result.propTypes = {
  result: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    points: PropTypes.number,
    url: PropTypes.string,
  }),
};

Result.defaultProps = {
  result: {
    title: '',
    author: '',
    points: '',
    url: '',
  },
};

export default Result;
