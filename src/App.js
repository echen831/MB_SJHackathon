import React, { useState, useEffect } from 'react';

import './App.css';
import { Today } from './components/today';
import { History } from './components/history'
import { Buttons } from './components/buttons';
import { Map } from './components/map';
import data from './assets/us_map.json';

const Months = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec'
}

const App = () => {

  const [currState, setCurrState] = useState('CA');
  const [isHistLoaded, setHistIsLoaded] = useState(false);
  const [histError, setHistError] = useState(null);
  const [histData, setHistdata] = useState([]);


  useEffect(() => { fetchHistData(currState) }, [])

  const fetchHistData = (state) => {
    setHistIsLoaded(false);
    fetch(`https://api.covidtracking.com/v1/states/${state}/daily.json`)
      .then(res => res.json())
      .then((result) => {
        let newResult = result.map(res => {
            let newRes = Object.assign({}, res);
            newRes.date = setDate(newRes.date);
            return newRes;
        })
        setHistIsLoaded(true);
        setHistdata(newResult);
      },
        (error) => {
          setHistIsLoaded(true);
          setHistError(error)
        }
      )
  }

  const setDate = (date) => {
    date = date.toString();
    let y = date.slice(0, 4);
    let m = date.slice(4, 6);
    let d = date.slice(6);

    return `${Months[m]} ${d}, ${y}`
  }

  
  return (
    <div className="App">
      MB Social Justice Hackathon
      <div className='map-wrapper'>
        <div className='info-wrapper'>
          <Today currState={currState}/>
          <History data={histData} isLoaded={isHistLoaded} error={histError}/>
        </div>
        <Map data={data} fetchHistData={fetchHistData} setCurrState={setCurrState}/>
      </div>
      {/* <Buttons setCurrState={setCurrState} fetchHistData={fetchHistData}/> */}
    </div>
  );
}

export default App;
