import React, {Component} from 'react';
import kiki_left from './images/kiki.png';
import kiki_right from './images/kiki_right.png';
import './day12.css'

class Kiki extends Component {
    constructor (props) {
        super(props);

        this.draw = this.draw.bind(this);

        this.ctx = null;
        this.x = 0;
        this.y = 0;
        this.vx = 2;
        this.vy = 2;
    }


    componentDidMount () {
        this.draw();
    }


    draw () {
        if (!this.canvas) return;
        if (!this.canvas.getContext) return;

        if (!this.ctx) {
            this.ctx = this.canvas.getContext('2d');
        }
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "#512c7f";
        this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);

        var circle = new Path2D();
        circle.moveTo(125, 35);
        circle.arc(100, 100, this.canvas.height / 15, 0, 2 * Math.PI);
        this.ctx.fillStyle = "white";
        this.ctx.fill(circle);

        var kiki = new Image();
        if (this.vx < 0) {
            kiki.src = kiki_left;
        } else {
            kiki.src = kiki_right;
        }

        this.ctx.drawImage(kiki, this.x, this.y, 100, 69 );


        this.x += this.vx;
        this.y += this.vy;

        if (this.y + this.vy > this.canvas.height) {
            this.vy = -this.vy;
            this.y = this.canvas.height;
        }

        if (this.y + this.vy < 0) {
            this.vy = -this.vy;
            this.y = 0;
        }

        if (this.x + this.vx > this.canvas.width) {
            this.vx = -this.vx;
            this.x = this.canvas.width;
        }

        if (this.x + this.vx < 0) {
            this.vx = -this.vx;
            this.x = 0;
        }

        window.requestAnimationFrame(this.draw);
    }


    render() {
        return (
            <div>
                <canvas ref={element => this.canvas = element}></canvas>

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

export default Kiki;
