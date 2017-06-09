import React, {Component} from 'react';
import wolf from './images/wolf.png';

import './day8.css'
var moonphases = ['🌑' ,'🌒','🌓','🌔', '🌕', '🌖', '🌗', '🌘'];

class Eight extends Component {
    constructor(props) {
        super (props);
        this.state = {
            currentFrame: 0
        }
    }

    componentDidMount () {
        setInterval(function () {
            this.setState ({
                currentFrame: (this.state.currentFrame + 1) % moonphases.length
            });
        }.bind(this), 200)
    }
    render() {
        return (
            <div>
                <div className="emoji-text">
                    {moonphases[this.state.currentFrame]}
                </div>
            </div>
        )
    }
}


export default Eight;
