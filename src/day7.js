import React, {Component} from 'react';
import painting from './images/piri_painting.gif';
import out from './images/piri_painting_out.gif';
import './day7.css'


class Painting extends Component {
    constructor(props) {
        super (props);
        this.state = {
            isOut: false
        };
    }


    render () {
        return (
            <div>
                <div className="painting">
                    <div className="frame">
                        {!this.state.isOut &&
                            <img src={painting} alt="painting" />
                        }
                        {this.state.isOut &&
                            <img src={out} alt="out" />
                        }
                    </div>
                </div>

                <div className="plaque bronze" onClick={e => this.setState({ isOut: true })}>
                    make a wish
                </div>

                <img src={out} alt="out" style={{ display: "none" }}/>

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


export default Painting;
