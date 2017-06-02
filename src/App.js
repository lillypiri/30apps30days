import React, { Component } from 'react';
import pockybebe from './images/blinky.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <img src={pockybebe} className="pocky" alt="pocky" />
          <h2>30 apps in 30 days</h2>
        <p className="title">
        DAY 1: We're going to need snacks and magic for this - collect the pocky and stars!
        </p>
      </div>
    );
  }
}

export default App;
