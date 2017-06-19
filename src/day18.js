import React, {Component} from 'react';
import './day18.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 10};
    this.reset = this.reset.bind(this);
  }

  reset () {
      this.setState({
          secondsElapsed: 10
      })
  }


  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed - 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
        <div>
          <div>
              {this.state.secondsElapsed  >= 1 &&
                  <div className="countdown">
                      {this.state.secondsElapsed}
                  </div>
              }
         </div>
          <div className="countdown">
             {this.state.secondsElapsed <= 0 &&
                 <img src="https://media.giphy.com/media/3orifj4cjt0VdXlJHW/giphy.gif" alt="ralph gif"/>
            }
          </div>
          <div>
              {this.state.secondsElapsed <= -3 &&
                  <button className="countdown-button" onClick={this.reset}>{"again"}</button>
              }
          </div>
      </div>
    );
  }
}

export default Timer;
