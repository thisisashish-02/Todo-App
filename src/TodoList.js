import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{ task: 'Exercise' }, { task: 'Run' }]
        };
        this.create = this.create.bind(this);
    }
    create(newTodo) {
        this.setState(st => ({
            todos: [...st.todos, newTodo]
        }))
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo task={todo.task} />
        })
        return (
            <div>
                <h1>Todo App</h1>
                <NewTodoForm createTodo={this.create} />
                <ul>{todos}</ul>
            </div>
        )
    }
}

export default TodoList;