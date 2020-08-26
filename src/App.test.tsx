// https://enzymejs.github.io/enzyme/docs/api
// https://jestjs.io/docs/en/getting-started

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import TimerContainer from './component/TimerContainer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('.app');
  expect(appComponent.length).toBe(1);
});

test('renders TimerContainer', () => {
  const wrapper = shallow(<App />);
  const timerContainerComponent = wrapper.find('[data-test="timerContainerComponent"]');
  expect(timerContainerComponent.length).toBe(1);
});

test('renders Timer display', () => {
  const wrapper = shallow(<TimerContainer />);
  const timerComponent = wrapper.find('[data-test="timerComponent"]');
  expect(timerComponent.length).toBe(1);
});
