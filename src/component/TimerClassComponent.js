import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import Seconds from './Seconds';

class TimerClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      now: moment().format(props.timeFormat),
    };
  }

  render() {
    const { now } = this.state;

    return (
      <div data-test="testTimer">
        <span>{now}</span>
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
