import React, {Component} from 'react';
import pepper from './images/pepper.gif';
import bubble from './images/speechbubble.png';
import './day4.css';

class Four extends Component {
    constructor (props) {
        super(props);
            this.state = {
                isRisen: false,
            }
    }

    onPepperClick () {
        this.setState ({
            isRisen: true
        });
    }
    
    render() {
        return(
            <div>

                <div className="pepper">
                    <img src={pepper} className="images" alt="pepper" onClick={e => this.onPepperClick()}/>
                        <div className="bubble">
                            <img src={bubble} alt="bubble" />
                            <div className="pepper-words">

                                {!this.state.isRisen &&
                                    "Hello, my name is Pepper. The world's cutest humanoid robot."
                                }

                                {this.state.isRisen &&
                                    "You have angered me."
                                }

                            </div>
                        </div>
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


export default Four;
