import React, { useState, useEffect } from 'react';

import './App.css';
import { Today } from './components/today';
import { History } from './components/history'
import { Buttons } from './components/buttons';


const App = () => {

  const [currState, setCurrState] = useState('CA');
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [histData, setHistdata] = useState([]);


  useEffect(() => { fetchHistData(currState)}, [])

  const fetchHistData = (state) => {
    fetch(`https://api.covidtracking.com/v1/states/${state}/daily.json`)
      .then(res => res.json())
      .then((result) => {
        setIsLoaded(true);
        setHistdata(result);
      },
        (error) => {
          setIsLoaded(true);
          setError(error)
        }
      )
  }

  
  return (
    <div className="App">
      MB Social Justice Hackathon
      <Buttons currState={currState} setCurrState={setCurrState} fetchHistData={fetchHistData}/>
      <Today currState={currState}/>
      <History data={histData}/>
    </div>
  );
}

export default App;
