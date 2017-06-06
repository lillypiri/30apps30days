import React, {Component} from 'react';
import './day5.css'

class Five extends Component {
    constructor (props) {
        super(props); {
            this.state = {
                isHangry: true,
            }
            this.onButtonClick = this.onButtonClick.bind(this);
        }
    }

    onButtonClick () {
        this.setState ({
            isHangry: !this.state.isHangry
        });
    }

    render() {
        return (
            <section className="cube">
                <div className="cube-title">
                    <div>good</div>
                    <div>egg</div>
                </div>
                <div className="screen">
                    <div className="screen-text">
                        {this.state.isHangry &&
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
                        }

                        {!this.state.isHangry &&
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
                        }
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
