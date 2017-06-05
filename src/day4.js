import React, {Component} from 'react';
import pepper from './images/pepper.gif';
import bubble from './images/speechbubble.png';
import './day4.css';

class Four extends Component {
    render() {
        return(
            <div>
                <div className="bubble">
                    <img src={bubble} alt="bubble" />
                </div>
                <div className="pepper">
                    <img src={pepper} className="images" alt="pepper" />
                </div>
            </div>
        )

    }
}


export default Four;
