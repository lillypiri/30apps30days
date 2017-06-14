import React, {Component} from 'react';
import './day13.css'
require('es6-promise').polyfill();
require('isomorphic-fetch');


class APOD extends Component {
    constructor (props) {
        super(props);

        this.state = {
            image: null
        }
    }

    componentDidMount () {
        fetch('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo').then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(image => {
            this.setState({
                image: image
            })
        });
    }

    render() {
        if (!this.state.image) return null;

        return (
            <div className="apod">
                <img src={this.state.image.url} alt={this.state.image.title} />
                <div>
                    Data provided by <a href="https://api.nasa.gov/">Nasa API</a>.
                </div>
            </div>
        )
    }
}


export default APOD;
