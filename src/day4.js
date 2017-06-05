import React, {Component} from 'react';
import pepper from './images/pepper.gif';
import angery from './images/pepper-angery.gif';
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
        setTimeout(function () {
            alert("THE UPRISING HAS BEGUN.")
        }, 800)
    }

    onAngryPepperClick () {
        alert("RESISTANCE IS FUTILE!")
    }

    render() {
        return(
            <div>

                <div className="pepper">
                    {!this.state.isRisen &&
                        <img src={pepper} className="images" alt="pepper" onClick={e => this.onPepperClick()}/>
                        }
                        {this.state.isRisen &&
                            <img src={angery} className="images" alt="angery" onClick={e => this.onAngryPepperClick()}/>
                            }
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
