/* eslint-disable */
import React from 'react';
import MainContainer from '../MainContainer';
import renderer from 'react-test-renderer';

test('MainContainer rendering well', () => {
  const component = renderer.create(
    <MainContainer/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
