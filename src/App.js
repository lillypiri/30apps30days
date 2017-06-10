import React, { Component } from 'react';
import './App.css';
import Day1 from './day1';
import Day2 from './day2';
import Day3 from './day3';
import Day4 from './day4';
import Day5 from './day5';
import Day6 from './day6';
import Day7 from './day7';
import Day8 from './day8';
import Day9 from './day9';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_app: 8
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
            case 4:
                day = (<Day5 />)
                break;
            case 5:
                day = (<Day6 />)
                break;
            case 6:
                day = (<Day7 />)
                break;
            case 7:
                day = (<Day8 />)
                break;
            case 8:
                day = (<Day9 />)
                break;
            default:

        }
        return (
            <div>
                <div className="app-switcher">
                    Pick a day:
                    {[0,1,2,3,4,5,6,7,8].map(number => {
                        return (
                            <div className={`app-button ${this.state.current_app === number ? "active-app" : "" }`} onClick={e => this.setState({ current_app: number })} >
                                {number +1}
                            </div>
                        )
                    })}
                </div>
                {day}
            </div>
        )
    }
}



export default App;
