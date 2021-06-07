import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.create = this.create.bind(this);
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, { ...newTodo, id: uuid() }]
        });
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        });
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo key={todo.id} task={todo.task} removeTodo={() => this.remove(todo.id)} />
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