import React, { Component } from "react";

class TodoAddForm extends Component {

    // 가상돔 엘리먼트에 접근
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name); // true면 실행 -> name값 넣어서 리스트 추가
        this.formRef.current.reset();   // 추가후 input 비우기
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