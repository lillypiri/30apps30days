import React, {Component} from 'react';
import './day6.css'

const WIDTH = 10;
const HEIGHT = 5;

class GameGal extends Component {
    constructor (props) {
        super(props);

        var grid = new Array(WIDTH * HEIGHT).fill('☆');

        grid[10] = "😺";
        grid[27] = "🍟";
        grid[29] = "🍓";
        grid[33] = "🍦";
        grid[36] = "🍔";
        grid[31] = "🥐";
        grid[5] = "🍭";
        grid[9] = "🍑";
        grid[1] = "🥑";
        grid[41] = "🍉";
        grid[44] = "🍏";
        grid[49] = "🍕";
        grid[12] = "🍒";
        grid[16] = "🍌";
        grid[24] = "🧀";

        this.state = {
            grid: grid,
            foods: 0,
            player_position: 10,
        }
        this.onButtonClick = this.onButtonClick.bind(this);

    }

    onButtonClick (direction) {
        var grid = this.state.grid;
        var player_position = this.state.player_position;
        var foods = this.state.foods;

        switch (direction) {
            case "up":
                if (player_position < WIDTH) return;
                grid[player_position] = '☆';
                player_position = player_position - WIDTH;
                if (grid[player_position] !== "☆") {
                    foods ++;
                }
                grid[player_position] = "😺";
                break;
            case "down":
                if (player_position > (HEIGHT -1) * WIDTH) return;
                grid[player_position] = '☆';
                player_position = player_position + WIDTH;
                if (grid[player_position] !== "☆") {
                    foods ++;
                }
                grid[player_position] = "😺";
                break;
            case "left":
                if (player_position === 0) return;
                grid[player_position] = '☆';
                player_position = player_position - 1;
                if (grid[player_position] !== "☆") {
                    foods ++;
                }
                grid[player_position] = "😺";
                break;
            case "right":
            if (player_position === WIDTH * HEIGHT -1) return;
                grid[player_position] = '☆';
                player_position = player_position + 1;
                if (grid[player_position] !== "☆") {
                    foods ++;
                }
                grid[player_position] = "😺";
                break;
            default:
        }



        this.setState({
            grid: grid,
            player_position: player_position,
            foods: foods
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
                                <div>🍽 foods: {this.state.foods}</div>
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
