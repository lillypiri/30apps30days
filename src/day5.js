import React, {Component} from 'react';
import './day5.css'

class Five extends Component {
    constructor (props) {
        super(props); {
            this.state = {
                mood: 0,
            }
            this.onButtonClick = this.onButtonClick.bind(this);
        }
    }

    onButtonClick () {
        var newmood = Math.floor(Math.random()*3)

        while (newmood === this.state.mood) {
            newmood = Math.floor(Math.random()*3)
        }  
        this.setState ({
            mood: newmood
        });
    }

    render() {
        var screen;
        switch(this.state.mood) {
            case 0:
            screen = (
                <div>
                    <div>☆                 ✧ ☆    ✧✧</div>
                    <div>     ^,,,,✿,^ </div>
                    <div>   ☆     (ﾐⓛᆽⓛﾐ)   ✧ </div>
                    <div>    (###,,--,,##)</div>
                    <div>      (###,, , , ,,##)</div>
                    <div>      ✿..(, (,,), ,(,,) ,,)~~~~</div>
                    <div>   </div>
                    <div>  MEOW MEOW MEOW!</div>
                    <div> [I am a regal princess!]</div>
                </div>
            )
            break;

            case 1:
            screen = (
                <div>
                    <div>☆                 ✧ ☆    ✧✧</div>
                    <div>     ^,,\/✿,^ </div>
                    <div>   ☆     (ﾐⓛДⓛﾐ)   ✧ </div>
                    <div>    (###,,--,,##)</div>
                    <div>      (###,, , , ,,##)</div>
                    <div>      ✿..(, (,,), ,(,,) ,,)~~~~</div>
                    <div>   </div>
                    <div>  MEOW MEOW MEOW!</div>
                    <div> [FEED ME NOW!]</div>
                </div>
            )
            break;
        }
        return (
            <section className="cube">
                <div className="cube-title">
                    <div>good</div>
                    <div>egg</div>
                    <div className="brand-text">
                        by piri
                    </div>
                </div>
                <div className="screen">
                    <div className="screen-text">
                        {screen}
                        </div>
                </div>
                <div className="cube-button" onClick={e => this.onButtonClick()}>
                    ❤
                </div>
            </section>

        )

    }
}

export default Five;
