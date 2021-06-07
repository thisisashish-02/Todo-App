import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    update(id, updatedTask) {
        const updateTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo;
        });
        this.setState({ todos: updateTodos });
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        });
    }
    toggleCompletion(id) {
        const updateTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        });
        this.setState({ todos: updateTodos });
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    updateTodo={this.update}
                    removeTodo={() => this.remove(todo.id)}
                    toggleTodo={() => this.toggleCompletion(todo.id)}
                />
            )
        });
        return (
            <div className="TodoList">
                <h1>Todo App<span>A Simple React App To Manage Todos!</span></h1>
                <ul>{todos}</ul>
                <NewTodoForm createTodo={this.create} />
            </div>
        )
    }
}

export default TodoList;