import React, {Component} from 'react';
import './day10.css'


class EightBall extends Component {
    render () {
        return(
            <div>
                <div className="eightball up-down">
                    <div className="eightball-inner-circle">
                        <div className="eightball-text">
                            8
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default EightBall;
