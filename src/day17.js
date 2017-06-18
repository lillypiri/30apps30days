import React, {Component} from 'react';
import './day17.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div className="todolist">
        <div className="to-do-list-title">To Do List:</div>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input autoFocus className="todo-input" type="text" onChange={this.handleChange} value={this.state.text} />
          <button type="submit" className="add-todo">{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
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
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
  }
}

export default TodoApp;
