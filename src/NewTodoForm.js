import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo({ ...this.state, id: uuid(), completed: false });
        this.setState({ task: '' });
    }
    render() {
        return (
            <div className="NewTodoForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">New Todo: </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="New Todo"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;