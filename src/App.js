import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Page1 from './components/page1'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Page1 />
      </div>
    </Router>
  );
}

export default App;
