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
        var newmood = Math.floor(Math.random()*7)

        while (newmood === this.state.mood) {
            newmood = Math.floor(Math.random()*7)
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

            case 2:
            screen = (
                <div>
                    <div>☆                 ✧ ☆    ✧✧</div>
                    <div>     ^,,,,✿,^ </div>
                    <div>   ☆     (ﾐⓛ∇ⓛﾐ)   ✧ </div>
                    <div>    (###,,--,,##)</div>
                    <div>      (###,, , , ,,##)</div>
                    <div>      ✿..(, (,,), ,(,,) ,,)~~~~</div>
                    <div>   </div>
                    <div>  MEOW MEOW!</div>
                    <div> [I enjoy chasing the red dot!]</div>
                </div>
            )
            break;

            case 3:
            screen = (
                <div>
                    <div>☆                 ✧ ☆    ✧✧</div>
                    <div>     ^,,,,✿,^ </div>
                    <div>      *:･ﾟ✧(ﾐ✪ᆺ✪ﾐ)*:･ﾟ✧ </div>
                    <div>    (###,,--,,##)</div>
                    <div>      (###,, , , ,,##)</div>
                    <div>      ✿..(, (,,), ,(,,) ,,)~~~~</div>
                    <div>   </div>
                    <div>  MEOW MEOW!</div>
                    <div> [Food is so dreamy.]</div>
                </div>
            )
            break;

            case 4:
            screen = (
                <div>
                    <div>☆                 ✧ ☆    ✧✧</div>
                    <div>     ^,,,,✿,^ </div>
                    <div>      *:･ﾟ✧(ﾐ♡ᆺ♡ﾐ)*:･ﾟ✧ </div>
                    <div>    (###,,--,,##)</div>
                    <div>      (###,, , , ,,##)</div>
                    <div>      ✿..(, (,,), ,(,,) ,,)~~~~</div>
                    <div>   </div>
                    <div>  meoooowwwwza!</div>
                    <div> [Nathan is so handsome.]</div>
                </div>
            )
            break;

            case 5:
            screen = (
                <div>
                    <div>☆                 z Z    ✧✧</div>
                    <div>     ^,,,,✿,^ </div>
                    <div>      *:･ﾟ✧(ﾐ✖ᆺ✖ﾐ)*:･ﾟ✧ </div>
                    <div>    (###,,--,,##)</div>
                    <div>      (###,, , , ,,##)</div>
                    <div>      ✿..(, (,,), ,(,,) ,,)~~~~</div>
                    <div>   </div>
                    <div>  meow..</div>
                    <div> [I need a nap..]</div>
                </div>
            )
            break;

            case 6:
            screen = (
                <div>
                    <div>☆                 . ?    ✧?</div>
                    <div>     ^,,,,✿,^ </div>
                    <div>      *:･ﾟ✧(ﾐචᆺචﾐ)*:･ﾟ✧ </div>
                    <div>    (###,,--,,##)</div>
                    <div>      (###,, , , ,,##)</div>
                    <div>      ✿..(, (,,), ,(,,) ,,)~~~~</div>
                    <div>   </div>
                    <div>  Mrow.</div>
                    <div> [To be? Or not to be?]</div>
                </div>
                )


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
