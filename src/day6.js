import React, {Component} from 'react';
import './day6.css'


class GameGal extends Component {
    render () {
        return (
            <div>
                <section className="gamegal">
                    <div className="gg-screen">
                        <div className="gg-screen-text">
                            <div>
                                <div>🍽 foods: </div>
                                <div>☆                 .    ✧?</div>
                                <div>     ^,,,,✿, </div>
                                <div>      *:･ﾟ✧)*:･ﾟ✧ </div>
                                <div>    (###,,--,,##)</div>
                                <div>      (###,, , , ,,##)</div>
                                <div>      ✿..(, 😺  ,(,,) ,,)~~~~!!!!</div>
                                <div>   </div>
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
