import React, { Component } from 'react';
import kitty_rolled from './images/kitty.gif';
import kitty_waiting from './images/kitty.gif';
import './day3.css';

const roll = require("every-dice");


class Dice extends Component {
    constructor (props) {
        super(props);
            this.state = {
                isRolled: false,
                rollNumber: roll()
            };
            this.reset = this.reset.bind(this);
            this.onKittyClick = this.onKittyClick.bind(this);
        }

        reset () {
            this.setState ({
                isRolled: false,
                rollNumber: roll()
            })
        }

        onKittyClick () {
            if (this.state.isRolled) {
                this.reset()
            } else {
                this.setState ({
                    isRolled: true
                });
            }
        }

    render() {
        return(
            <div>
                <div className="header">
                    Let's roll some dice!
                </div>

                <div className="kitty">
                    <img src={this.state.isRolled ? kitty_rolled : kitty_waiting} onClick={e => this.onKittyClick()}/>
                </div>
                <div className="dice">
                    {this.state.isRolled ? this.state.rollNumber : ''}
                </div>


                <div className="footer">
                    Fork this on my github <a href="https://github.com/lillypiri/30apps30days">@lillypiri</a>.
                    <div>
                        Artwork by <a href="https://lillypiri.com">Lilly Piri</a>.
                    </div>
                </div>
            </div>
        )
    }
}


export default Dice;
