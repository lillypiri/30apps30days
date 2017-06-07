import React, {Component} from 'react';
import './day6.css'

const WIDTH = 10;
const HEIGHT = 5;

class GameGal extends Component {
    constructor (props) {
        super(props);
        this.state = {
            grid: new Array(WIDTH * HEIGHT).fill('☆'),
            foods: 0,
        }

        this.state.grid[10] = "😺";
        this.state.grid[27] = "🍟";
        this.state.grid[33] = "🍦";
        this.state.grid[5] = "🍭";
        this.state.grid[49] = "🍕";
        this.state.grid[12] = "🍒"; 
    }


    renderGrid () {
        var rows = [];

        for (var y = 0; y < HEIGHT; y++) {
            rows.push(
                <div className="row" key={y}>
                    {this.state.grid.slice(y * WIDTH, (y * WIDTH) + WIDTH).map((cell, x) => {

                        return (
                            <div className="cell" key={x}>
                                {this.state.grid[(y * WIDTH) + x]}
                            </div>
                        );
                    })}
                </div>
            )
        }
        return (
            <div className="grid">
                {rows.map(row => row)}
            </div>
        );
    }


    render () {
        return (
            <div>
                <section className="gamegal">
                    <div className="gg-screen">
                        <div className="gg-screen-text">
                            <div>
                                <div>🍽 foods:</div>
                                {this.renderGrid()}
                            </div>
                        </div>
                    </div>
                    <div className="gg-title">
                        <div>
                            game
                            <span className="gg-title-small">
                                gal
                            </span>
                        </div>
                        <div className="gg-brand-text">
                            by piri
                        </div>
                    </div>
                    <div className="gg-button-up">

                    </div>
                    <div className="gg-button-left">
                    </div>
                    <div className="gg-button-right">
                    </div>
                    <div className="gg-button-down">
                    </div>

                    <div className="gg-speakers">
                    </div>
                </section>

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

export default GameGal;
