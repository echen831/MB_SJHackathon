import React, { useState } from 'react';

import './App.css';
import { Map } from './components/map';
import { States } from './components/states';


const App = () => {

  const [currState, setCurrState] = useState('AK')

  
  return (
    <div className="App">
      MB Social Justice Hackathon
      <States currState={currState} setCurrState={setCurrState}/>
      <Map currState={currState}/>
    </div>
  );
}

export default App;
