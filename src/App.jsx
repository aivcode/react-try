import { useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="header">
        <h3 className="title">My Watches Collection</h3>
        <ul className="radioSelectList">
          <li>
            <input
              className="radioSelect"
              type="radio"
              value="Diver"
              name="typeSelect"
              defaultChecked
            />
            Diver
            <input
              className="radioSelect"
              type="radio"
              value="Skeleton"
              name="typeSelect"
            />
            Skeleton
          </li>
          <li>
            <label className="counterLabel">
              {/* { numberOfWatches } { watchType } in collection */}
            </label>
          </li>
        </ul>
      </div>
      {/* 
      <AddWatchForm />
      <WatchList /> 
      */}
    </div>
  );
}

export default App;
