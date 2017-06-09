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

                {this.state.currentFrame !== 4 &&
                    <div className="emoji-text">
                        👨‍🌾
                    </div>
                }
                {this.state.currentFrame === 4 &&
                    <div className="emoji-text">
                        <img src={wolf} alt="wolf" />
                    </div>
                }
                <br />
                <br />
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


export default Eight;
