import React, { Component } from "react";
import './app.css';
import Navbar from "./components/navbar";
import Todos from "./components/todos";

class App extends Component {
  // state프로퍼티 안에 할일 목록 넣기
  state = {
    todos: [
      { id: 1, name: 'study😎', count: 0},
      { id: 2, name: 'eat😎', count: 0},
      { id: 3, name: 'play', count: 0},
      { id: 4, name: 'sleep', count: 0}
    ]
  }

  // 목록 추가
  handleAdd = name => {
    // todos를 복사해서 추가후 리렌더링
    const todos = [ ...this.state.todos, {id: Date.now(), name, count: 0} ];
    this.setState({todos});
  }

  // 카운트 더하기
  handleIncrement = todo => {
    const todos = this.state.todos.map(item => {
      // 기존 배열을 복사해 와서 선택한 목록을 1씩 더하기
      if(item.id === todo.id){
        return {...todo, count: todo.count + 1};
      }
      return item;
    });
    this.setState({todos});
  }

  // 카운트 빼기
  handleDecrement = todo => {
    const todos = this.state.todos.map(item => {
      // 기존 배열을 복사해 와서 선택한 목록을 1씩 빼기
      if(item.id === todo.id){
        const count = todo.count - 1;
        return {...todo, count: count < 0 ? 0 : count}; // 0이하로는 내려가지 않도록
      }
      return item;
    });
    this.setState({todos});
  }

  // 목록 삭제
  handleDelete = todo => {
    // 선택한 목록을 제외한 부분을 필터링해서 새 배열에 넣어줌
    const todos = this.state.todos.filter(item => item.id != todo.id);
    this.setState({todos});
  }

  // 목록 리셋
  handleReset = () => {
    const todos = this.state.todos.map(todo => {
      todo.count = 0;
      return todo;
    });
    this.setState({todos});
  }

  render(){
    return (
      <>
        <Navbar totalCount={ this.state.todos.filter(item => item.count > 0).length }/>
        <Todos todos={this.state.todos}
          onAdd={this.handleAdd}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    )
  }
}

export default App;
