import React, {Component} from 'react';
import './day14.css'


class Mystery extends Component {
    constructor(props) {
        super (props);

        this.state = {
            isPushed: false,
            image: null
        };
    }

    componentDidMount () {
        fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&limit=1&rating=g&api_key=dc6zaTOxFJmzC').then(function(response) {
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
        return(

            <div className="fifteen">
                {!this.state.isPushed &&
                    <div className="mystery" onClick={e => this.setState({ isPushed: true })}>
                        push me
                    </div>
                }

                {this.state.isPushed &&
                    <div className="mysteryreveal">
                        <div className="gifs">
                            {this.state.images.map(image => {
                                return (
                                    <img key={image.id} src={image.images.downsized.url} alt="" />
                                )
                            })}

                            <div>
                                Trending G-rated gif by <a href="https://github.com/Giphy/GiphyAPI#trending-gifs-endpoint">GiphyAPI</a>.
                            </div>
                        </div>
                    </div>
                }
            </div>
        )

    }
}

export default Mystery;
