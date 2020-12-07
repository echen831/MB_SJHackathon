import React, { useState } from 'react';

import './App.css';
import { Map } from './components/map';
import { States } from './components/states';


const STATES = ['AK', 'CA', 'NV']

const App = () => {

  const [states, setStates] = useState(STATES);
  const [currState, setCurrState] = useState('AK')

  
  return (
    <div className="App">
      MB Social Justice Hackathon
      <Map currState={currState}/>
      <States states={states} currState={currState} setCurrState={setCurrState}/>
    </div>
  );
}

export default App;
