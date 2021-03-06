import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, task: this.props.task };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false })
    }
    toggleForm(evt) {
        this.setState({ isEditing: true })
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            name="task"
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className="Todo">
                    <li
                        className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
                        onClick={this.props.toggleTodo}
                    >
                        {this.props.task}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}>
                            <i className="fas fa-pen" />
                        </button>
                        <button onClick={this.props.removeTodo}>
                            <i className="fas fa-trash" />
                        </button>
                    </div>
                </div>
            )
        }
        return result;
    }
}

export default Todo;