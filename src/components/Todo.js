import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <p data-todos-index={this.props.todo.id}>
                <span>{this.props.todo.title}</span>
            </p>
        );
    }
}

export default Todo;