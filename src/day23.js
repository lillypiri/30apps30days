import React, {Component} from 'react';
import luckstill from './images/luck-still.png';
import luckloop from './images/luck2.gif';
import './day23.css'

class Luck extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLucky: false
        };
    }

    render() {
        return(
            <div>
                <div className="luck-images">
                    {!this.state.isLucky &&
                        <div>
                            <img src={luckstill} alt="luck still" />
                            <div className="magiclick" onClick={e => this.setState({ isLucky: true })}>
                                Click for luck.
                            </div>
                            <div className="footer">
                                Fork this on my github <a href="https://github.com/lillypiri/30apps30days">@lillypiri</a>.
                                <div>
                                    Artwork by <a href="https://lillypiri.com">Lilly Piri</a>.
                                </div>
                            </div>
                        </div>
                    }
                    {this.state.isLucky &&
                        <div>
                            <img src={luckloop} alt="luckloop" />
                        </div>
                    }
                </div>
            </div>
        )

    }
}
export default Luck;
