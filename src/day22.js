import React, {Component} from 'react';
import './day22.css'

const Remarkable = require("remarkable");

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 'Type some Markdown here! Example: `back-ticks`  ~~strikethrough~~ *italics* '};
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  getRawMarkup() {
    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
        <div>
            <div className="container">
                <div className="column">
                    <div className="text-box">
                        <div className="title-23">Input</div>
                        <textarea className="textarea"
                            onChange={this.handleChange}
                            defaultValue={this.state.value}
                            autoFocus />
                    </div>
                </div>

                <div className="column">
                    <div className="output-box">
                        <div className="title-23">Output</div>
                        <div
                            className="markdown-output"
                            dangerouslySetInnerHTML={this.getRawMarkup()}
                            />
                    </div>
                </div>
            </div>

            <div className="footer">
              <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown Cheatsheet here</a>.
              <div>
                  This app uses the <a href="https://www.npmjs.com/package/remarkable">remarkable package</a>.
              </div>
            </div>
        </div>
    );
  }
}

export default TextBox;
