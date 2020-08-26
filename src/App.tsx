import React from 'react';
import './App.css';
import TimerContainer from './component/TimerContainer';

function App() {
  return (
    <div className="app">
      <TimerContainer data-test="timerContainerComponent" />
    </div>
  );
}

export default App;
