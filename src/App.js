import React, { useState, useEffect } from 'react';

import './App.css';
import { Today } from './components/today';
import { History } from './components/history'
import { Buttons } from './components/buttons';


const App = () => {

  const [currState, setCurrState] = useState('CA');
  const [isHistLoaded, setHistIsLoaded] = useState(false);
  const [histError, setHistError] = useState(null);
  const [histData, setHistdata] = useState([]);


  useEffect(() => { fetchHistData(currState)}, [])

  const fetchHistData = (state) => {
    setHistIsLoaded(false);
    fetch(`https://api.covidtracking.com/v1/states/${state}/daily.json`)
      .then(res => res.json())
      .then((result) => {
        setHistIsLoaded(true);
        setHistdata(result);
      },
        (error) => {
          setHistIsLoaded(true);
          setHistError(error)
        }
      )
  }

  
  return (
    <div className="App">
      MB Social Justice Hackathon
      <Buttons currState={currState} setCurrState={setCurrState} fetchHistData={fetchHistData}/>
      <Today currState={currState}/>
      <History data={histData} isLoaded={isHistLoaded} error={histError}/>
    </div>
  );
}

export default App;
