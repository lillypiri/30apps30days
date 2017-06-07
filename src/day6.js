import React, {Component} from 'react';
import './day6.css'


class GameGal extends Component {
    render () {
        return (
            <div>
                <section className="gamegal">
                    <div className="gg-screen">
                        <div className="gg-screen-text">

                            </div>
                    </div>
                    <div className="gg-title">
                        <div>gamegal</div>
                        <div className="gg-brand-text">
                            by piri
                        </div>
                    </div>
                    <div className="gg-button-a">
                        a
                    </div>
                    <div className="gg-button-b">
                        b
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
