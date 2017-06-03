import React, { Component } from 'react';
import './App.css';
import Day1 from './day1';
import Day2 from './day2';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_app: 0
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
                </div>
                {day}
            </div>
        )
    }
}



export default App;
