import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import Seconds from './Seconds';

class TimerClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      now: moment().format(props.timeFormat),
      time: '',
    };
  }

  render() {
    const { now, time } = this.state;

    return (
      <div data-test="testTimer">
        <span>{now}</span>
        <span data-test="timeDisplay">this is a test for check {time}</span>
        <button data-test="displayTimeButton" onClick={() => this.setState({ time })}>
          set time
        </button>
        <Seconds />
      </div>
    );
  }
}

TimerClassComponent.propTypes = {
  timeFormat: PropTypes.string,
};

TimerClassComponent.defaultProps = {
  timeFormat: 'HH:mm',
};

export default TimerClassComponent;
