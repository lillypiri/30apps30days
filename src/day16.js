import React, {Component} from 'react';
import './day16.css'

class Sixteen extends Component {
    constructor (props) {
        super(props);

        this.draw = this.draw.bind(this);
        this.onCanvasClick = this.onCanvasClick.bind(this);
        this.ctx = null;
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
        this.ctx.fillStyle = "Black";
        this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);

        for (var j = 1; j < 150; j++) {
            this.ctx.save();
            this.ctx.fillStyle = '#fff';
            this.ctx.translate(Math.floor(Math.random() * this.canvas.width),
                          Math.floor(Math.random() * this.canvas.height));
            this.drawStar(this.ctx, Math.floor(Math.random() * 10) + 5);
            this.ctx.restore();
          }
}


        drawStar(ctx, r) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(r, 0);
        for (var i = 0; i < 9; i++) {
            ctx.rotate(Math.PI / 5);
        if (i % 2 === 0) {
            ctx.lineTo((r / 0.525731) * 0.200811, 0);
        } else {
            ctx.lineTo(r, 0);
        }
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    onCanvasClick(event) {
        this.ctx.save();
        this.ctx.fillStyle = '#fff';
        this.ctx.translate(event.clientX, (event.clientY - this.canvas.offsetTop));
        this.drawStar(this.ctx, Math.floor(Math.random() * 10) + 5);
        this.ctx.restore();
    }
    render() {
        return (
            <div>
                <div className="stars">
                    Click to add some stars!
                </div>
                <div className="starrynight">
                    <canvas ref={element => this.canvas = element} onClick={e => this.onCanvasClick(e) }></canvas>
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

export default Sixteen;
