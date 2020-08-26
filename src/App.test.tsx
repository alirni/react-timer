// https://enzymejs.github.io/enzyme/docs/api
// https://jestjs.io/docs/en/getting-started

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('.app');
  expect(appComponent.lenght).toBe(1);
});

test('renders incerment TimerContainer', () => {});

test('renders Timer display', () => {});
