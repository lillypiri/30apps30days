import React, {Component} from 'react';
import painting from './images/piri_painting.jpg';
import './day7.css'


class Painting extends Component {
    render () {
        return (
            <div>
                <div className="painting">
                    <img src={painting} alt="painting" />
                </div>
            </div>
        )

    }
}

export default Painting;
