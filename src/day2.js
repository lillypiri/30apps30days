import React, { Component } from 'react';
import baby from './images/baby.png';
import goblin from './images/goblin.png';
import lab from './images/lab.gif';
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
            <div>

                {this.state.isSolved === 'yes' &&
                    <div className="success">
                        <img src={baby} className="images" alt="baby" onClick={e => this.setState({ isSolved: "" })} />
                        Yay! I'm not going to be a goblin!
                    </div>
                }

                {this.state.isSolved === 'no' &&
                    <div className="failure">
                        <img src={goblin} className="images" alt="goblin" onClick={e => this.setState({ isSolved: "" })} />
                        What have you done to me!?
                    </div>
                }

                {this.state.isSolved === '' &&
                    <div className="puzzle">
                        <div className="header">
                            DAY 2: Which path leads through the labyrinth?
                        </div>

                        <img src={lab} className="images" alt="lab" />

                        <div className="buttons">
                            <button className="button" onClick={e => this.setState({ isSolved: 'yes'})}>A</button>

                            <button className="button" onClick={e => this.setState({ isSolved: 'no'})}>B</button>

                            <button className="button" onClick={e => this.setState({ isSolved: 'no'})}>C</button>
                        </div>
                    </div>

                }

                {this.state.isSolved === '' &&
                    <div className="footer">
                        Fork this on my github <a href="https://github.com/lillypiri/30apps30days">@lillypiri</a>.
                        <div>
                            Artwork by <a href="https://lillypiri.com">Lilly Piri</a>.
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Day2;
