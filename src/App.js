import React from 'react';
import Header from './components/header';

import {BrowserRouter as Router } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
    </div>
    </Router>
  );
}

export default App;
