import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)
  
  function handleClick() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  function handleClose() {
    setIsSidebarVisible(false);
  }

  return (
    <div className={'app'}>
      <header className={'header'}>
        <h1>Grid Playground</h1>
        <button onClick={handleClick} >View code</button>
      </header>
      <main className={'main'} />
      {isSidebarVisible && (
        <div className={'sidebar'}>
          <button className={'close-button'} onClick={handleClose}>Close</button>
        </div>)}
    </div>
  );
}

export default App;
