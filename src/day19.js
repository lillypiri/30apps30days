import React, {Component} from 'react';
import './day19.css';
const Loading = require("react-loading-animation");


class GhibliCats extends Component {
    constructor (props) {
        super(props);
        this.state = {
            cats: []
        }
    }

    componentDidMount () {
        fetch("https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3").then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(response => {
            return Promise.all(response.people.map(url => {
                return fetch(url).then(response => {
                    return response.json();
                })
            })).then(cats => {
                this.setState({
                    cats: cats
                })
            })
        });
    }

    render() {
        return (
            <div>
                <div className="gc-title">
                    Cats of Studio Ghibli!
                </div>
                <Loading isLoading={this.state.cats.length === 0}>
                    <div className="ghibli-cats">
                        {this.state.cats.map(cat => {
                            return (
                                <div key={cat.name}>
                                    {cat.name}
                                </div>
                            )
                        })}
                    </div>
                </Loading>
                <div className="gc-footer">
                    Data retrieved using the <a href="https://ghibliapi.herokuapp.com/">Studio Ghibli API</a>.
                </div>
            </div>
        )

    }
}

export default GhibliCats;
