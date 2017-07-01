import React, {Component} from 'react';
import tv from './images/ruby_mags_tv.png';
import pad from './images/generic_pad.png';
import './day30.css'

// list=PLZFUuGV88MuBkBgLg86dqZAyg3czgXLVQ?ecver=2&

class Thirty extends Component {
    render() {
        return(
            <div>
                <div className="thirty">
                    <iframe className="player" title="video" src="https://www.youtube.com/embed/02tsg0aHayM?autoplay=1&showinfo=0&loop=1&list=PLZFUuGV88MuBkBgLg86dqZAyg3czgXLVQ&listType=list&controls=0&modestbranding=1" width="640" height="360" frameBorder="0" allowFullScreen>
                    </iframe>
                    <div className="ruby-mags-tv">
                        <img src={pad} alt="generic pad"/>
                    </div>
                    <div className="foreground">
                        <img src={tv} alt="ruby and mags watching tv by lilly piri" />
                    </div>
                </div>
                <div className="footer">
                    Fork this on my github <a href="https://github.com/lillypiri/30apps30days">@lillypiri</a>.
                    <div>
                        Artwork by <a href="https://lillypiri.com">Lilly Piri</a>. Watch the full size videos at <a href="https://www.youtube.com/playlist?list=PLZFUuGV88MuBkBgLg86dqZAyg3czgXLVQ">#lillypiripaints on YouTube</a>.
                    </div>
                </div>
            </div>
        )

    }
}


export default Thirty;
