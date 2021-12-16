import React, { Component } from "react";

class TodoAddForm extends Component {

    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    }


    render() {
        return (
            <form ref={this.formRef} onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="What to do today"/>
                <button className="add-button">add</button>
            </form>
        );
    }
}

export default TodoAddForm;