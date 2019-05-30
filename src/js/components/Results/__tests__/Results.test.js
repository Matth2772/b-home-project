/* eslint-disable */
import React from 'react';
import Results from '../Results';
import renderer from 'react-test-renderer';

test('Results rendering well', () => {
  const component = renderer.create(
    <Results/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
