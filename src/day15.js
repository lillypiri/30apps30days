import React, {Component} from 'react';
import './day15.css'


class Mystery extends Component {
    constructor(props) {
        super (props);

        this.fetchGif = this.fetchGif.bind(this);

        this.state = {
            query: '',
            image: null
        };
    }


    fetchGif (event) {
        event.preventDefault();

        if (!this.state.query) {
            alert("Type something in!");
            return;
        }

        fetch(`http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(this.state.query)}&limit=1&rating=g&api_key=dc6zaTOxFJmzC`).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(response => {
            this.setState({
                image: response.data[0]
            });
        });
    }


    render() {
        return (
            <div className="fifteen">
                <form onSubmit={this.fetchGif}>
                    <input autoFocus className="fifteen-input" type="text" onChange={e => this.setState({ query: e.target.value })} value={this.state.query} placeholder="Search for a GIF" />
                    <button type="submit" className="mystery">Find a GIF</button>
                </form>

                {this.state.image &&
                    <div className="gifs">
                        <img key={this.state.image.id} src={this.state.image.images.downsized.url} alt="" />

                        <div>
                            gif supplied by <a href="https://github.com/Giphy/GiphyAPI#trending-gifs-endpoint">GiphyAPI</a>.
                        </div>
                    </div>
                }
            </div>
        )

    }
}

export default Mystery;
