import React, {Component} from 'react';
import avocado from './images/avocado.png';
import './day28.css'

class TwentyEight extends Component {
    constructor (props) {
        super(props);
        this.state = {
            donuts: [false, false, false],
            score: 10
        }
        this.onDonutHit = this.onDonutHit.bind(this);
    }

    onDonutHit (index) {
        let { donuts } = this.state;

        if (donuts[index]) {
            donuts[index] = false;
            this.setState({
                donuts,
                score: this.state.score -12
            })
        }
    }


    componentDidMount () {
        this.timer = setInterval(() => {
            let { donuts } = this.state;
            donuts.fill(false);
            if (Math.random() >= 0.5) {
                donuts[Math.floor(Math.random() * donuts.length)] = true;
            }
            this.setState({
                donuts
            })
        }, 700)
    }


    componentWillUnmount () {
        clearInterval(this.timer);
    }


    render () {
        return (
            <div className="twenty-eight">
                Smash an avo!
                <div className="donut-score">
                    Your Savings: ${this.state.score}
                </div>
                {this.state.donuts.map((donut, index) => {
                    return (
                        <Donut key={index} isUp={donut} onHit={e => this.onDonutHit(index)}/>
                    )
                })}

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


class Donut extends Component {

    render () {
        return (
            <div className="donut-wrapper" onClick={this.props.onHit}>
                <div className={`donut ${this.props.isUp ? "donut-up" : ""}`} style={{backgroundImage: `url(${avocado})`}}>

                </div>
            </div>
        )
    }
}
export default TwentyEight;
