import React, {Component} from 'react';
import './day17.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
        <div>
          <div className="todolist">
            <div className="to-do-list-title">To Do List:</div>
            <TodoList items={this.state.items} onDelete={this.onDelete} />
            <form onSubmit={this.handleSubmit}>
              <input autoFocus className="todo-input" type="text" onChange={this.handleChange} value={this.state.text} />
              <button type="submit" className="add-todo">{'Add #' + (this.state.items.length + 1)}</button>
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

 onDelete (id) {
      this.setState(previous_state => {
          return {
              items: previous_state.items.filter(item => item.id !== id)
          }
      })
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.text.trim()) {
        alert("Type something in!");
        return;
    }

    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
        <div className="todo-items">
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}<button className="delete-button" onClick={e => this.props.onDelete(item.id)}>x</button></li>
                ))}
            </ul>
        </div>
    );
  }
}

export default TodoApp;
