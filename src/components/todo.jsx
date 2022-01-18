import React, { Component } from "react";

class Todo extends Component {

    handleIncrement = () => {
        this.props.onIncrement(this.props.todo);
    }

    handleDecrement = () => {
        this.props.onDecrement(this.props.todo);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.todo);
    }

    render(){
        // Todos에서 넘어온 할일 목록을 받아서 name과 count에 할당
        const { name, count } = this.props.todo;
        return (
            <li className="todo">
                <span className="todo">{name}</span>
                <span className="todo-count">{count}</span>
                <button className="todo-button todo-increase" onClick={this.handleIncrement}><i class="far fa-plus-square"></i></button>
                <button className="todo-button todo-decrease" onClick={this.handleDecrement}><i class="far fa-minus-square"></i></button>
                <button className="todo-button todo-delete" onClick={this.handleDelete}><i class="fas fa-eraser"></i></button>
            </li>
        )
    }
}

export default Todo;