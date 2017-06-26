import React, {Component} from 'react';
import blusharm from './images/blusharm.png';
import blush from './images/blush.png';
import './day25.css'

class Blush extends Component {
    render() {
        return(
            <div>
                <div className="blush">
                    <img src={blush} className="blush-body" alt="blush kitten's body"/>
                    <img src={blusharm} className="blush-arm" alt="blush kitten's arm"/>
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

export default Blush;
