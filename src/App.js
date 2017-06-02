import React, { Component } from 'react';
import pockybebe from './images/blinky.gif';
import spocky from './images/pocky1.png';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={isDone: false};
    }

  render() {
    return (
      <div className="App">
          {this.state.isDone &&
              <img src={pockybebe} className="pocky" alt="pocky" />
          }
          <h2>30 apps in 30 days</h2>
        <p className="title">
        DAY 1: We're going to need snacks and magic for this - collect the pocky and stars!
        </p>
        <Pocky onDone={e => this.setState({ isDone: true })} />
      </div>
    );
  }
}
// I'm using states (because the data is changing) to make the Pocky and stars appear and disappear.
// The props need to be set up even though they won't be used.
class Pocky extends Component {
    constructor(props) {
        super(props);
        this.state = {isPockyOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isPockyOn: !prevState.isPockyOn
        }));
        this.props.onDone();
    }

    render() {
        return (
            <div className="collectItems">
                {this.state.isPockyOn &&
                    <img src={spocky} className="spocky" alt="spocky" onClick={this.handleClick}/>
                }
            </div>
        );
    }
}

export default App;
