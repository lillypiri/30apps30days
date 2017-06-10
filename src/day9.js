import React, {Component} from 'react';
import './day9.css'

class Nine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var fortune = '';
        switch (event.target.value) {
            case 'Aries':
                fortune = "Beware of screaming tacos that shoot banana pies."
                break;
            case 'Taurus':
                fortune = "A pot of honey will arrive on your doorstep. Inside it you will find a fortune cookie that will tell you your fortune."
                break;
            case 'Pisces':
                fortune = "A cute pupper will bring you a golden chest full of Tim Tams."
                break;
            case 'Cancer':
                fortune = "Zoidberg from Futurama will show you how to invest and have a sandwich heavy portfolio."
                break;
            case 'Leo':
                fortune = "You will reenact the Lion King on top of the Story Bridge Hotel. Good for you."
                break;
            case 'Gemini':
                fortune = "A floating cloud will land on your face and moisturise it with heavenly raindrops."
                break;
            case 'Scorpio':
                fortune = "A giant tree will appear before you, you should climb it and find the golden eggs."
                break;
            case 'Virgo':
                fortune = "You will win 20 games in a row of chess and then eat a nice bar of chocolate."
                break;
            case 'Capricorn':
                fortune = "A giant adorable plush animal will arrive in your mailbox. It's super cute. What a day!"
                break;
            case 'Aquarius':
                fortune = "A tiny door will appear in your home. It leads to a dimension where there is cake for every meal."
                break;
            case 'Libra':
                fortune = "Random facts are scrawled all over every surface you encounter. You will be so prepared for Who Wants To Be A Millionaire."
                break;
            case 'Sagittarius':
                fortune = "You will enjoy a fun, sunny day playing games and eating cream pies."
                break;
            default:


        }
        this.setState({
            value: event.target.value,
            fortune: fortune
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div className="form-nine">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <div>
                                Tomorrow, you'll wake up, do a bunch of stuff, and then go back to sleep, but what will the stuff be? Let's find out:
                            </div>
                                <div>
                                    <select className="dropdown" value={this.state.value} onChange={this.handleChange}>
                                        <option value="">Choose one</option>
                                        <option value="Pisces">Pisces</option>
                                        <option value="Taurus">Taurus</option>
                                        <option value="Cancer">Cancer</option>
                                        <option value="Leo">Leo</option>
                                        <option value="Aries">Aries</option>
                                        <option value="Scorpio">Scorpio</option>
                                        <option value="Gemini">Gemini</option>
                                        <option value="Virgo">Virgo</option>
                                        <option value="Capricorn">Capricorn</option>
                                        <option value="Aquarius">Aquarius</option>
                                        <option value="Libra">Libra</option>
                                        <option value="Sagittarius">Sagittarius</option>
                                    </select>
                                </div>
                        </label>
                    </form>
                </div>
                <div className="result">
                    {this.state.value !== '' &&
                        this.state.fortune
                    }
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
