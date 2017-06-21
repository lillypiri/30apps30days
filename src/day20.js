import React, {Component} from 'react';
import './day20.css'
import homeron from './images/homer-on.jpg';
import homeroff from './images/homer-off.jpg';

class Twenty extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isOn: true
        };
    }

    render() {
        return (
            <div>
                {this.state.isOn &&
                    <div className="twenty-title">
                        Day Twenty
                    </div>
                }

                {!this.state.isOn &&
                    <div className="twenty-title-off">
                        Day Twenty
                    </div>
                }

                    <div className="on-off-button"  onClick={e => this.setState({ isOn: !this.state.isOn })}>
                        {this.state.isOn ?  <img src={homeron} alt="homer light on"/> : <img src={homeroff} alt="homer light off"/>}
                    </div>
                    <div className="on-off-button">
                        Click Homer.
                    </div>

                    <div className="footer">
                        Images via <a href="https://frinkiac.com/">Frinkiac</a>.
                    </div>

                    <img src={homeroff} className="on-off-button" alt="homer light off" style={{ display: "none" }}/>
            </div>
        )

    }
}

export default Twenty;
