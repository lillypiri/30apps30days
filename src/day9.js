import React, {Component} from 'react';
import './day9.css'

class Nine extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Aries'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Your horrorscope for ' + this.state.value + ' is: Watch out for raining ice cream!');
    }
    render() {
        return (
            <div>
                <div className="form-nine">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <div>
                                Choose your star sign:
                            </div>
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="Pisces">Pisces</option>
                                <option value="Aries">Aries</option>
                                <option value="Scorpio">Scorpio</option>
                                <option value="Gemini">Gemini</option>
                            </select>
                            <input type="submit" value="Submit" />
                        </label>
                    </form>
                </div>
                <div className="footer">
                    Fork this on my github <a href="https://github.com/lillypiri/30apps30days">@lillypiri</a>.
                    <div>
                        Artwork by <a href="https://lillypiri.com">Lilly Piri</a>.
                    </div>
                </div>
            </div>
        );
    }
}

export default Nine;
