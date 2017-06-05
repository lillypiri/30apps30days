import React, { Component } from 'react';
import './App.css';
import Day1 from './day1';
import Day2 from './day2';
import Day3 from './day3';
import Day4 from './day4';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_app: 3
        }
    }
    render() {
        var day = null;

        switch (this.state.current_app) {
            case 0:
                day = (<Day1 />)
                break;
            case 1:
                day = (<Day2 />)
                break;
            case 2:
                day = (<Day3 />)
                break;
            case 3:
                day = (<Day4 />)
                break;
            default:

        }
        return (
            <div>
                <div className="app-switcher">
                    Pick a day:
                    <div className="app-button" onClick={e => this.setState({ current_app: 0 })} >
                        1
                    </div>
                    <div className="app-button" onClick={e => this.setState({ current_app: 1 })} >
                        2
                    </div>
                    <div className="app-button" onClick={e => this.setState({ current_app: 2 })} >
                        3
                    </div>
                    <div className="app-button" onClick={e => this.setState({ current_app: 3 })} >
                        4
                    </div>
                </div>
                {day}
            </div>
        )
    }
}



export default App;
