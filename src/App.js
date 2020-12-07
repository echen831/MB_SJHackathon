import React, { useState } from 'react';

import './App.css';
import { Today } from './components/today';
import { Buttons } from './components/buttons';


const App = () => {

  const [currState, setCurrState] = useState('AK')

  
  return (
    <div className="App">
      MB Social Justice Hackathon
      <Buttons currState={currState} setCurrState={setCurrState}/>
      <Today currState={currState}/>
    </div>
  );
}

export default App;
