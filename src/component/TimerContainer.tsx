import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: '#263238',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  timerBody: {
    backgroundColor: '#1a1a1a',
    border: '40px solid #141414',
    borderRadius: 20,
    width: '80%',
    height: 300,

    fontSize: 200,
    color: '#fafafa',
  },

  legContainer: {
    display: 'flex',
    width: '70%',
    justifyContent: 'space-between',
  },

  leftLeg: {
    borderLeft: '80px solid #141414',
    borderBottom: '80px solid transparent',
    // borderBottomLeftRadius: 20,
  },

  rightLeg: {
    borderRight: '80px solid #141414',
    borderBottom: '80px solid transparent',
  },
});

const TimerContainer = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <div className={classes.timerBody}>22:10</div>
      <div className={classes.legContainer}>
        <div className={classes.leftLeg}></div>
        <div className={classes.rightLeg}></div>
      </div>
    </div>
  );
};

export default TimerContainer;
