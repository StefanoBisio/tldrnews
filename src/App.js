import React from 'react';

import { Navigation } from './features/navigation/Navigation';
import { Board } from './features/board/Board';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Board />
    </div>
  );
}

export default App;
