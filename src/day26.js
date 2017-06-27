import React, {Component} from 'react';
import trapdoor from './images/trapdoor.png';
import fluffy from './images/fluffy.png';
import rip from './images/rip.png';
import stone from './images/stone.png';
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
            <div className="twenty-six">
                {this.state.isFluffyDoor === 'yes' &&
                    <div>
                        <div>
                            <img src={fluffy} className="fluffy" alt="fluffy painting by lilly piri"/>
                        </div>
                        Oh !@$#, it's Fluffy. What do you want to do now?
                        <div className="fluffy-buttons">

                            <button className="button" onClick={e => this.setState({ isEscaping: 'yes', isFluffyDoor: 'next' })}>FLEE</button>

                            <button className="button" onClick={e => this.setState({ isEscaping: 'no', isFluffyDoor: 'next' })}>POOP MY PANTS</button>

                            <button className="button" onClick={e => this.setState({ isEscaping: 'no', isFluffyDoor: 'next' })}>I'M PARALYSED WITH FEAR</button>
                        </div>
                    </div>
                }

                {this.state.isEscaping === 'yes' &&
                    <div>
                        <div>
                        You escaped! ...and there's something in your pocket..
                        </div>

                        <div>
                            <img src={stone} alt="stone" className="fluffy" onClick={e => this.setState({ isEscaping: '', isFluffyDoor:''})}/>
                        </div>
                    </div>
                }
                {this.state.isEscaping === 'no' &&
                    <div>
                        <img src={rip} alt="RIP YOU" className="fluffy" onClick={e => this.setState({ isEscaping: '', isFluffyDoor:''})}/>
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
                        <div>
                            <img src={trapdoor} className="trapdoor" alt="trapdoor painting by lilly piri" onClick={e => this.setState({ isFluffyDoor: 'yes' })}/>
                            <img src={trapdoor} className="trapdoor" alt="trapdoor painting by lilly piri" onClick={e => this.setState({ isFluffyDoor: 'yes' })}/>
                            <img src={trapdoor} className="trapdoor" alt="trapdoor painting by lilly piri" onClick={e => this.setState({ isFluffyDoor: 'yes' })}/>
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
