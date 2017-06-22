import React, {Component} from 'react';
import './day21.css'

class TwentyOne extends Component {
    constructor () {
        super();

        this.state = {
            sentence: `Dear !NAME!,
            We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. Please find enclosed a list of all necessary books and equipment. Term begins on September 1.

            We await your owl by no later than July 31.

            Yours sincerely,

            Minerva McGonagall
            Deputy Headmistress`,
            typed_sentence: ''
        }
    }

    // set interval to

    componentDidMount () {
        let name = prompt("What is your name?");
        if (name === "") {
            name = "Mr Potter"
        }
        this.setState(prevState => {
            return {
                sentence: prevState.sentence.replace("!NAME!", name)
            }
        })
        this.interval = setInterval (() => {
            this.setState(prevState => {
                const typed_sentence = prevState.sentence.substring(0, prevState.typed_sentence.length + 1)
                if (typed_sentence === prevState.sentence) {
                    clearInterval(this.interval);
                }
                return {
                    typed_sentence
                }
            });
        }, 60)
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
