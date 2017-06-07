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
            player_position: 10,
        }
        this.onButtonClick = this.onButtonClick.bind(this);

        this.state.grid[this.state.player_position] = "😺";
        this.state.grid[27] = "🍟";
        this.state.grid[33] = "🍦";
        this.state.grid[5] = "🍭";
        this.state.grid[49] = "🍕";
        this.state.grid[12] = "🍒";
    }

    onButtonClick (direction) {
        var grid = this.state.grid;
        var player_position = this.state.player_position;

        switch (direction) {
            case "up":
                grid[player_position] = '☆';
                player_position = player_position - WIDTH;
                grid[player_position] = "😺";
                break;
            case "down":
                grid[player_position] = '☆';
                player_position = player_position + WIDTH;
                grid[player_position] = "😺";
                break;
            case "left":
                grid[player_position] = '☆';
                player_position = player_position - 1;
                grid[player_position] = "😺";
                break;
            case "right":
                grid[player_position] = '☆';
                player_position = player_position + 1;
                grid[player_position] = "😺";
                break;
        }



        this.setState({
            grid: grid,
            player_position: player_position,
        });
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
                    <div className="gg-button-up" onClick={e => this.onButtonClick("up")}>

                    </div>
                    <div className="gg-button-left" onClick={e => this.onButtonClick("left")}>
                    </div>
                    <div className="gg-button-right" onClick={e => this.onButtonClick("right")}>
                    </div>
                    <div className="gg-button-down" onClick={e => this.onButtonClick("down")}>
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
