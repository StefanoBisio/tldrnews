import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navigation } from './features/navigation/Navigation';
import { Home } from './pages/home/Home';
import { AboutPage } from './pages/AboutPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
