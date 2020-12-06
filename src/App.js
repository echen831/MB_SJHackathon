import React, { useState } from 'react';

import './App.css';
import { Map } from './components/map';
import { Input } from './components/input';

const DATA = [
  {name: 'Eric Chen', address: '123 Main St'}
]

const App = () => {
  const [names, setNames] = useState(DATA);

  const add = (data) => { 
    setNames([...names, data])
  }
  
  return (
    <div className="App">
      MB Social Justice Hackathon
      <Map names={names}/>
      <Input add={add}/>
    </div>
  );
}

export default App;
