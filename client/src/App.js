import React from 'react';
import logo from './SpaceX_Logo_Black.png';
import './App.css';

function App() {
  return (
    <div className="App mt-4">
      <img src={logo} alt="SpaceX" style={{width: 525, display:'block', margin:'auto'}}/>
    </div>
  );
}

export default App;
