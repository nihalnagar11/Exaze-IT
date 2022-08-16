/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import InputForm from '../src/InputForm';
import CheckEmulator from '../src/CheckEmulator';
import ButtonScreen from '../src/ButtonScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});


test('renders correctly with InputForm', () => {
  const tree = renderer.create(<InputForm title="swipe" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly with CheckEmulator', () => {
  const tree = renderer.create(<CheckEmulator title="swipe" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly with ButtonScreen', () => {
  const tree = renderer.create(<ButtonScreen title="swipe" />).toJSON();
  expect(tree).toMatchSnapshot();
});