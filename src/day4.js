import React, {Component} from 'react';
import pepper from './images/pepper.gif';
import './day4.css';

class Four extends Component {
    render() {
        return(
            <div>
                <div className="header">
                    test
                </div>
                <div>
                    <img src={pepper} className="images" alt="pepper" />
                </div>
            </div>
        )

    }
}


export default Four;
