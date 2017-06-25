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
import Day10 from './day10';
import Day11 from './day11';
import Day12 from './day12';
import Day13 from './day13';
import Day14 from './day14';
import Day15 from './day15';
import Day16 from './day16';
import Day17 from './day17';
import Day18 from './day18';
import Day19 from './day19';
import Day20 from './day20';
import Day21 from './day21';
import Day22 from './day22';
import Day23 from './day23';
import Day24 from './day24';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_app: 23
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
            case 9:
                day = (<Day10 />)
                break;
            case 10:
                day = (<Day11 />)
                break;
            case 11:
                day = (<Day12 />)
                break;
            case 12:
                day = (<Day13 />)
                break;
            case 13:
                day = (<Day14 />)
                break;
            case 14:
                day = (<Day15 />)
                break;
            case 15:
                day = (<Day16 />)
                break;
            case 16:
                day = (<Day17 />)
                break;
            case 17:
                day = (<Day18 />)
                break;
            case 18:
                day = (<Day19 />)
                break;
            case 19:
                day = (<Day20 />)
                break;
            case 20:
                day = (<Day21 />)
                break;
            case 21:
                day = (<Day22 />)
                break;
            case 22:
                day = (<Day23 />)
                break;
            case 23:
                day = (<Day24 />)
                break;
            default:

        }
        return (
            <div>
                <div className="app-switcher">
                    Pick a day:
                    {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(number => {
                        return (
                            <div key={number} className={`app-button ${this.state.current_app === number ? "active-app" : "" }`} onClick={e => this.setState({ current_app: number })} >
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
