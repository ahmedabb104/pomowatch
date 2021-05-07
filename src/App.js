import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Timer from './components/TImer';
import './App.css';

function App() {
  const [timer, setTimer] = useState(1500)
  const [pomoTimer, setPomoTimer] = useState(1500)
  const [shortTimer, setShortTimer] = useState(300)
  const [longTimer, setLongTimer] = useState(600)

  return (
    <>
      <Navbar timer={timer} setTimer={setTimer} 
              pomoTimer={pomoTimer} setPomoTimer={setPomoTimer}
              shortTimer={shortTimer} setShortTimer={setShortTimer}
              longTimer={longTimer} setLongTimer={setLongTimer}/>
      <Timer timer={timer} setTimer={setTimer}
             pomoTimer={pomoTimer} setPomoTimer={setPomoTimer}
             shortTimer={shortTimer} setShortTimer={setShortTimer}
             longTimer={longTimer} setLongTimer={setLongTimer}/>
    </>
  );
}

export default App;
