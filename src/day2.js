import React, { Component } from 'react';
import baby from './images/baby.png';
import './day2.css';


class Day2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSolved: ''
        };
    }

    render() {
        return (
            <div className="header">

                {this.state.isSolved === 'yes' &&
                    <div>
                        <img src={baby} className="baby" alt="baby" />
                        Yay! I'm not going to be a goblin!
                    </div>
                }

                {this.state.isSolved === 'no' &&
                    <div>
                        <img src={baby} className="baby" alt="baby" />
                        Oh no I am a goblin!
                    </div>
                }

                {this.state.isSolved === '' &&
                    <div>
                        Which path leads through the labyrinth?
                        <div>
                            <button className="button" onClick={e => this.setState({ isSolved: 'yes'})}>A</button>

                            <button className="button" onClick={e => this.setState({ isSolved: 'no'})}>B</button>

                            <button className="button" onClick={e => this.setState({ isSolved: 'no'})}>C</button>
                        </div>
                    </div>

                }
            </div>
        );
    }
}

export default Day2;
