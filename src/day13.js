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
        fetch('https://api.nasa.gov/planetary/apod?api_key=JluBnzEZVZKGS3fGX4HtmBXD2qHnAYaV11EfQJJX').then(function(response) {
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
                {this.state.image.media_type === "image" &&
                    <img src={this.state.image.url} alt={this.state.image.title} />
                }
                {this.state.image.media_type === "video" &&
                    <iframe src={this.state.image.url} alt={this.state.image.title} />
                }
                <div>
                    Data provided by <a href="https://api.nasa.gov/">Nasa API</a>.
                </div>
            </div>
        )
    }
}


export default APOD;
