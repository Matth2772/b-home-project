/* eslint-disable */
import React from 'react';
import Result from '../Result';
import renderer from 'react-test-renderer';

test('Result rendering well', () => {
  const component = renderer.create(
    <Result/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
