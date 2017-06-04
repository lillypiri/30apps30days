import React, { Component } from 'react';
import kitty from './images/kitty.gif';
import './day3.css';

const roll = require("every-dice");


class Dice extends Component {
    render() {
        return(
            <div>
                {roll()}
            </div>
        )
    }
}


export default Dice;
