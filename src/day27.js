import React, {Component} from 'react';
import './day27.css'

const WIDTH = 10;
const HEIGHT = 5;

class Hogwarts extends Component {
    constructor (props) {
        super(props);
        this.keyPressed = this.keyPressed.bind(this)
        var grid = new Array(WIDTH * HEIGHT).fill('🌳');


        grid[27] = "🏡";
        grid[28] = "📭 ";
        grid[29] = "⚡️";
        grid[33] = "🕸️";
        grid[36] = "🕷️";
        grid[31] = "🏠";
        grid[30] = "📭 ";
        grid[2] = "🦄";
        grid[5] = "🐀"
        grid[8] = "📭 ";
        grid[9] = "🏚️";
        grid[41] = "🐍";
        grid[44] = "🌕";
        grid[49] = "🐺";
        grid[12] = "🐀";
        grid[16] = "✨";
        grid[23] = "📭 ";
        grid[24] = "🏘️";
        grid[44] = "🏰"
        grid[45] = "📭 ";

        this.initial_grid = grid.slice(0);

        grid[10] = "🦉";

        this.state = {
            grid: grid,
            letters: 0,
            player_position: 10,
        }
        this.onButtonClick = this.onButtonClick.bind(this);

    }

    keyPressed (e){
        e.preventDefault();

        switch (e.keyCode) {
            case 38:
                this.onButtonClick("up");
                break;
            case 40:
                this.onButtonClick("down");
                break;
            case 37:
                this.onButtonClick("left");
                break;
            case 39:
                this.onButtonClick("right");
                break;
            default:
                return;
        }
    }

    componentDidMount () {
        window.addEventListener('keydown', this.keyPressed);
    }

    componentWillUnmount () {
        window.removeEventListener('keydown', this.keyPressed);
    }

    onButtonClick (direction) {
        var grid = this.state.grid;
        var player_position = this.state.player_position;
        var letters = this.state.letters;

        switch (direction) {
            case "up":
                if (player_position < WIDTH) return;
                grid[player_position] = this.initial_grid[player_position];
                if (grid[player_position] === "📭 ") {
                    grid[player_position] = "📬 "
                    this.initial_grid[player_position] = "📬 "
                    letters ++;
                }
                if (grid[player_position] === "🐀") {
                    grid[player_position] = "☠️ "
                    this.initial_grid[player_position] = "☠️ ";
                }
                if (grid[player_position] === "🕷️") {
                    grid[player_position] = "☠️ "
                    this.initial_grid[player_position] = "☠️ ";
                }
                player_position = player_position - WIDTH;
                grid[player_position] = "🦉";
                break;
            case "down":
                if (player_position >= (HEIGHT -1) * WIDTH) return;
                grid[player_position] = this.initial_grid[player_position];
                if (grid[player_position] === "📭 ") {
                    grid[player_position] = "📬 "
                    this.initial_grid[player_position] = "📬 "
                    letters ++;
                }
                if (grid[player_position] === "🐀") {
                    grid[player_position] = "☠️ "
                    this.initial_grid[player_position] = "☠️ ";
                }
                if (grid[player_position] === "🕷️") {
                    grid[player_position] = "☠️ "
                    this.initial_grid[player_position] = "☠️ ";
                }
                player_position = player_position + WIDTH;
                grid[player_position] = "🦉";
                break;
            case "left":
                if (player_position === 0) return;
                grid[player_position] = this.initial_grid[player_position];
                if (grid[player_position] === "📭 ") {
                    grid[player_position] = "📬 "
                    this.initial_grid[player_position] = "📬 "
                    letters ++;
                }
                if (grid[player_position] === "🐀") {
                    grid[player_position] = "☠️ "
                    this.initial_grid[player_position] = "☠️ ";
                }
                if (grid[player_position] === "🕷️") {
                    grid[player_position] = "☠️ "
                    this.initial_grid[player_position] = "☠️ ";
                }
                player_position = player_position - 1;
                grid[player_position] = "🦉";
                break;
            case "right":
            if (player_position === WIDTH * HEIGHT -1) return;
                grid[player_position] = this.initial_grid[player_position];
                if (grid[player_position] === "📭 ") {
                    grid[player_position] = "📬 "
                    this.initial_grid[player_position] = "📬 "
                    letters ++;
                }
                if (grid[player_position] === "🐀") {
                    grid[player_position] = "☠️ "
                    this.initial_grid[player_position] = "☠️ ";
                }
                if (grid[player_position] === "🕷️") {
                    grid[player_position] = "☠️ "
                    this.initial_grid[player_position] = "☠️ ";
                }
                player_position = player_position + 1;
                grid[player_position] = "🦉";
                break;
            default:
        }



        this.setState({
            grid: grid,
            player_position: player_position,
            letters: letters
        });
    }

    renderGrid () {
        var rows = [];

        const renderCell = (cell, x) => {
            return (
                <div className="cell" key={x}>
                    {this.state.grid[(y * WIDTH) + x]}
                </div>
            );
        }

        for (var y = 0; y < HEIGHT; y++) {
            rows.push(
                <div className="row" key={y}>
                    {this.state.grid.slice(y * WIDTH, (y * WIDTH) + WIDTH).map(renderCell)}
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
                <section className="ff-box">
                    <div className="ff-screen">
                        <div className="gg-screen-text">
                            <div>
                                <div><span role="img" aria-label="letter emoji">✉️</span> deliveries: {this.state.letters}</div>
                                {this.renderGrid()}
                            </div>
                        </div>
                    </div>
                    <div className="ff-title">
                        <div>
                            owl
                            <span className="ff-title-small">
                                post
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
                <div className="ff-text-description">
                    Use arrow keys or buttons to deliver letters & pick up a rat-sized snack!
                </div>
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

export default Hogwarts;
