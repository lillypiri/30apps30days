import React, { Component } from 'react';
import pockybebe from './images/blinky.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <img src={pockybebe} className="pocky" alt="pocky" />
          <h2>30 apps in 30 days</h2>
        <p className="App-intro">
         We're going to need SNACKS for this!
        </p>
      </div>
    );
  }
}

export default App;
