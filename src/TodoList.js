import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{ task: 'Exercise' }, { task: 'Run' }]
        };
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo task={todo.task} />
        })
        return (
            <div>
                <h1>Todo App</h1>
                <ul>{todos}</ul>
            </div>
        )
    }
}

export default TodoList;