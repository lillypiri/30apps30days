import React, {Component} from 'react';
import tv from './images/ruby_mags_tv.png';
import pad from './images/generic_pad.png';
import './day30.css'

class Thirty extends Component {
    render() {
        return(
            <div className="thirty">
                <iframe className="player" title="video" src="https://www.youtube.com/embed/02tsg0aHayM?list=PLZFUuGV88MuBkBgLg86dqZAyg3czgXLVQ?ecver=2&autoplay=1" width="640" height="360" frameBorder="0" allowFullScreen>
                </iframe>
                <div className="ruby-mags-tv">
                    <img src={pad} alt="generic pad"/>
                </div>
                <div className="generic-pad">
                    <img src={tv} alt="ruby and mags watching tv by lilly piri" />
                </div>
            </div>
        )

    }
}


export default Thirty;
