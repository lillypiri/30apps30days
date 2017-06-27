import React, {Component} from 'react';
import './day26.css'

class Alohomora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFluffyDoor: '',
            isEscaping: ''
        }
    }

    render() {
        return (
            <div>
                {this.state.isFluffyDoor === 'yes' &&
                    <div>
                        Oh SHIT, it's Fluffy. What do you want to do now?
                        <div className="buttons">
                            <button className="button" onClick={e => this.setState({ isEscaping: 'yes', isFluffyDoor: 'next' })}>FLEE</button>

                            <button className="button" onClick={e => this.setState({ isEscaping: 'no', isFluffyDoor: 'next' })}>POOP MY PANTS</button>

                            <button className="button" onClick={e => this.setState({ isEscaping: 'no', isFluffyDoor: 'next' })}>I'M PARALYSED WITH FEAR</button>
                        </div>
                    </div>
                }

                {this.state.isEscaping === 'yes' &&
                    <div>
                        You escaped!
                    </div>
                }
                {this.state.isEscaping === 'no' &&
                    <div>
                        RIP you.
                    </div>
                }
                {this.state.isFluffyDoor === 'no' &&
                    <div>
                        You guessed the right door.
                    </div>
                }

                {this.state.isFluffyDoor === 'next' &&
                    <div>

                    </div>
                }

                {this.state.isFluffyDoor === '' &&
                    <div>
                        <div>
                            Pick a door! If you are lucky, it won't be Fluffy's door.
                        </div>
                        <div className="fluffy-buttons">
                            <button className="fluffy-button" onClick={e => this.setState({ isFluffyDoor: 'yes'})}>1</button>

                            <button className="fluffy-button" onClick={e => this.setState({ isFluffyDoor: 'no'})}>2</button>

                            <button className="fluffy-button" onClick={e => this.setState({ isFluffyDoor: 'yes'})}>3</button>
                        </div>
                    </div>
                }

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

export default Alohomora;
