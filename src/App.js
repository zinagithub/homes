import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Page5 from './components/page5';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </div>
    </Router>
  );
}

export default App;
