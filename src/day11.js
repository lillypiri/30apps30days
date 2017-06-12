import React, {Component} from 'react';
import eggo from './images/eggo.gif';
import './day11.css'


class Day11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEaten: false
        };
    }

    render() {
        return(
            <div>
                {!this.state.isEaten &&
                    <div className="eggo">
                        Eat the eggos!
                    </div>
                }
                {this.state.isEaten &&
                    <div className="eggo">
                        That was delicious!
                    </div>
                }

                <div>
                    <Eggo isEaten={this.state.isEaten} onEaten={isEaten => this.setState({ isEaten })} />
                </div>
            </div>
        )

    }
}

class Eggo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.reset = this.reset.bind(this);

        this.eatenEggo = this.eatenEggo.bind(this);
    }

    reset () {
        this.setState({
            items: []
        })
        this.props.onEaten(false);
    }

    eatenEggo(item) {
        if (this.state.items.length === 0) {
            this.props.onEaten(true);
        }
        this.setState(prevState => ({
            items: prevState.items.concat(item)
        }));
    }

    render () {
        return (
            <div className="eatenEggo">
                {this.state.items.indexOf("eggo") === -1 &&
                    <img src={eggo} className="item" alt="eggo" onClick={e => this.eatenEggo("eggo")}/>
                }

                {this.props.isDone &&
                    <div>
                        <button className="button" onClick={this.reset}>Play Again!</button>
                    </div>
                }
            </div>
        )
    }
}

export default Day11;
