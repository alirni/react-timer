import React, { FC, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';

interface TimerInterfaceProps {
  timeFormat?: string;
}

const styles = makeStyles(theme => ({
  container: {},
}));

const Timer: FC<TimerInterfaceProps> = props => {
  const { timeFormat = 'HH:mm:ss' } = props;
  const classes = styles();

  const [now, setNow] = useState('');

  useEffect(() => {
    setInterval(() => {
      setNow(moment().format(timeFormat));
    }, 1000);
  }, [now]);

  return <div className={classes.container}>{now}</div>;
};

export default Timer;
