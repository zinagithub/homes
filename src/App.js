import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Page5 from './components/page5';
import Page6 from './components/page6';
import Footer from './components/footer';
import './App.css';

const Home = () => (
  <div>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path = "/"  component = {Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
