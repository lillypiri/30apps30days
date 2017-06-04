import React, { Component } from 'react';
import kitty from './images/kitty.gif';
import './day3.css';

const roll = require("every-dice");


class Dice extends Component {
    render() {
        return(
            <div>
                <div className="header">
                    Let's roll some dice!
                </div>

                <div className="kitty">
                    <img src={kitty} />
                </div>
                <div className="dice">
                    {roll()}
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
