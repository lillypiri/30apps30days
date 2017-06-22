import React, {Component} from 'react';
import './day21.css'
const sentence = `Dear Mr Potter,
We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. Please find enclosed a list of all necessary books and equipment. Term begins on September 1.

We await your owl by no later than July 31.

Sincerely,
Albus Dumbledore`

class TwentyOne extends Component {
    constructor () {
        super();

        this.state = {
            typed_sentence: ''
        }
    }

    // set interval to

    componentDidMount () {
        this.interval = setInterval (() => {
            this.setState(prevState => {
                const typed_sentence = sentence.substring(0, prevState.typed_sentence.length + 1)
                if (typed_sentence === sentence) {
                    clearInterval(this.interval);
                }
                return {
                    typed_sentence
                }
            });
        }, 80)
    }

    render() {
        return (
            <div className="typed-sentence">
                {this.state.typed_sentence.split("\n").map((line, index) => {
                    return (
                        <p key={index}>
                            {line}
                        </p>
                    )
                })}
            </div>
        )
    }
}

export default TwentyOne;
