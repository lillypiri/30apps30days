import React, {Component} from 'react';
import eggo from './images/eggo.gif';
import eleven from './images/eleven.gif';
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
                        Leggo my Eggo!
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
            items: [
                {
                    isEaten: false,
                    x: 40,
                    y: 20
                },
                {
                    isEaten: false,
                    x: 20,
                    y: 30
                },
                {
                    isEaten: false,
                    x: 60,
                    y: 50
                },
                {
                    isEaten: false,
                    x: 100,
                    y: 70
                },
                {
                    isEaten: false,
                    x: 120,
                    y: 10
                },
                {
                    isEaten: false,
                    x: 125,
                    y: 20
                }
            ],
            canReset: false
        }

        this.reset = this.reset.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick (index) {
        const items = this.state.items;

        items[index].isEaten = true;

        this.setState({
            items,
            canReset: items.filter(item => !item.isEaten).length === 0
         });
    }

    reset () {
        this.setState({
            items: [
                {
                    isEaten: false,
                    x: 40,
                    y: 20
                },
                {
                    isEaten: false,
                    x: 20,
                    y: 30
                },
                {
                    isEaten: false,
                    x: 60,
                    y: 50
                },
                {
                    isEaten: false,
                    x: 100,
                    y: 70
                },
                {
                    isEaten: false,
                    x: 120,
                    y: 10
                },
                {
                    isEaten: false,
                    x: 125,
                    y: 20
                }
            ],
            canReset: false
        })
        this.props.onEaten(false);
    }

    render () {
        return (
            <div>
                <div className="eatenEggo">
                    {!this.state.canReset &&
                        <div className="eggo-wrapper">
                            {this.state.items.map((item, index) => {
                                if (item.isEaten) return null;

                                return (
                                    <img key={index} className="item-eggo" alt="eggo" src={eggo} onClick={e => this.onClick(index)} style={{ top: `${item.y}%`, left: `${item.x}%` }} />
                                )
                            })}

                        </div>
                    }
                </div>

                {this.state.canReset &&
                    <div>
                        <div className="reset-page">
                            <img src={eleven} alt="eleven" />
                            <button className="reset-button" onClick={this.reset}>Play Again!</button>
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

export default Day11;
