import React, {Component} from 'react';
import './day14.css'
require('es6-promise').polyfill();
require('isomorphic-fetch');


class Gif extends Component {
    constructor (props) {
        super(props);

        this.state = {
            image: null
        }
    }


    componentDidMount () {
        fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=5&rating=g').then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(response => {
            this.setState({
                images: response.data
            })
        });
    }

    render() {
        if (!this.state.images) return null;

        return (
            <div className="gifs">
                {this.state.images.map(image => {
                    return (
                        <img key={image.id} src={image.images.downsized.url} alt="" />
                    )
                })}

                <div>
                    Top 5 trending G-rated gifs by <a href="https://github.com/Giphy/GiphyAPI#trending-gifs-endpoint">GiphyAPI</a>.
                </div>
            </div>
        )
    }
}

export default Gif;
