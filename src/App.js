import React, { useState } from 'react';

import './App.css';
import { Map } from './components/map';
import { Input } from './components/input';

const App = () => {
  const [names, setNames] = useState([]);

  
  return (
    <div className="App">
      MB Social Justice Hackathon
      <Map/>
      <Input/>
    </div>
  );
}

export default App;
