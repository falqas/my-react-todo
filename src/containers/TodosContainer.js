import React, { Component } from 'react';
import TodoModel from '../models/Todo';

class TodosContainer extends Component {
    render() {
        TodoModel.all()
            .then(res => {
                console.log(res);
            });
        return (
            <div className='todosContainer'>
                <h1>I am the TodosContainer page</h1>
            </div>
        );
    }
}

export default TodosContainer;