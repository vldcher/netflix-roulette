import React from 'react';
import renderer from 'react-test-renderer';
import Logo from './Logo';

it('renders correctly Logo', () => {
  const logo = renderer.create(<Logo />).toJSON();
  expect(logo).toMatchSnapshot();
});