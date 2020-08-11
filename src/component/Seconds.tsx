import React, { FC, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';

interface SecondsInterfaceProps {
  [x: string]: any;
}

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
  },

  secondsBox: {
    width: 10,
    height: 10,
    backgroundColor: 'blue',
    margin: 2,
  },
}));

const Seconds: FC<SecondsInterfaceProps> = props => {
  const classes = styles();
  const [seconds, setSeconds] = useState<number[] | undefined>(() => {
    const temp: number[] = [];
    for (let i = 0; i <= Number(moment().format('ss')); i++) {
      temp.push(i);
    }
    return temp;
  });

  useEffect(() => {
    setTimeout(() => {
      if (seconds && seconds.length <= 58) {
        setSeconds([...seconds, seconds.length + 1]);
      } else {
        setSeconds([]);
      }
    }, 1000);
  }, [seconds]);

  return (
    <div className={classes.container}>
      {seconds &&
        seconds.map((sec, index) => <div key={index} className={classes.secondsBox}></div>)}
    </div>
  );
};

export default Seconds;
