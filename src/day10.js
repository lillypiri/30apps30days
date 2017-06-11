import React, {Component} from 'react';
import './day10.css'

var answer = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];

class EightBall extends Component {
    constructor(props) {
        super (props);
        this.state = {
            answer: 0,
            isShake: false
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        var newanswer = Math.floor(Math.random()*19)

        while (newanswer === this.state.answer) {
            newanswer = Math.floor(Math.random()*19)
        }
        this.setState ({
            answer: newanswer,
            isShake: !this.state.isShake
        });
    }

    render () {
        return(
            <div>
                {!this.state.isShake &&
                    <div className="eightball up-down" onClick={e => this.onClick()}>
                        <div className="eightball-inner-circle">
                            <div className="eightball-text">
                                8
                            </div>
                        </div>
                    </div>
                }
                {this.state.isShake &&
                    <div className="eightball up-down" onClick={e => this.onClick()}>
                        <div className="eightball-inner-blue">
                            <div className="answers">
                                {answer[this.state.answer]}
                            </div>
                        </div>
                    </div>
                }
            </div>
        )

    }
}

export default EightBall;
