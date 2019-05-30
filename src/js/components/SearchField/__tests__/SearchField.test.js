/* eslint-disable */
import React from 'react';
import SearchField from '../SearchField';
import renderer from 'react-test-renderer';

test('SearchField rendering well', () => {
  const component = renderer.create(
    <SearchField/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
