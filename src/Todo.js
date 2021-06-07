import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                <button>Edit</button>
                <button onClick={this.props.removeTodo}>X</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}

export default Todo;