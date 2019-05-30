import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

function SearchField(props) {
  const { search } = props;
  return (

    <Form.Group controlId="search">
      <Form.Label>Hacker News Search</Form.Label>
      <Form.Control
        type="email"
        placeholder="Search news"
        onChange={e => search(e.target.value)}
      />
    </Form.Group>
  );
}

SearchField.propTypes = {
  search: PropTypes.func,
};

SearchField.defaultProps = {
  search() {
  },
};


export default SearchField;
