import React, {Component} from 'react';
import donut1 from './images/donut2.png';
import sad from './images/sadkat.png';
import loved from './images/lovedkat.png';
import './day29.css'

class TwentyNine extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isSad: true,
            isTouching: false
        }
        this.onDonutDrop = this.onDonutDrop.bind(this);
        this.onDonutDragStart = this.onDonutDragStart.bind(this);

        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
    }


    onDonutDrop (e) {
        this.setState({
            isSad: false
        })
    }


    onDonutDragStart (e) {
        e.dataTransfer.setData("text/plain", "donut");
        e.dataTransfer.dropEffect = "move";
    }


    onDonutDragOver (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }


    onTouchStart (e) {
        this.setState({
            isTouching: true
        });
    }

    onTouchMove (e) {
        this.donut.style.position = 'absolute';
        this.donut.style.top = `${e.touches[0].clientY}px`;
        this.donut.style.left = `${e.touches[0].clientX}px`;
    }

    onTouchEnd (e) {
        this.setState({
            isSad: false
        });
    }


    render () {
        return (
            <div className="twenty-nine">
                <div>
                    {this.state.isSad &&
                        <div>
                            <div>
                                Drag the donut to the Kitty to cheer her up.
                            </div>
                            <div>
                                <img ref={el => this.donut = el} src={donut1} alt="chocolate donut" draggable onDragStart={this.onDonutDragStart} onDrop={this.onDonutDrop} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd} />
                            </div>
                        </div>
                        }
                    </div>
                <div>
                    {this.state.isSad &&
                        <img src={sad} alt="sad kitty" onDragOver={this.onDonutDragOver} onDrop={this.onDonutDrop} />
                    }
                    {!this.state.isSad &&
                        <img src={loved} alt="loved kitty" />
                    }
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

export default TwentyNine;
