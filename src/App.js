import React, { Component } from 'react';
import './app.css';
import Day1 from './day1';
import Day2 from './day2';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_app: 1
        }
    }
    render() {
        switch (this.state.current_app) {
            case 0:
                return (<Day1 />)
                break;
            case 1:
            return (<Day2 />)
            break;
            default:

        }
    }
}



export default App;
