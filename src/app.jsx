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

  handleAdd = name => {
    const todos = [ ...this.state.todos, {id: Date.now(), name, count: 0} ];
    this.setState({todos});
  }

  handleIncrement = todo => {
    const todos = this.state.todos.map(item => {
      if(item.id === todo.id){
        return {...todo, count: todo.count + 1};
      }
      return item;
    });
    this.setState({todos});
  }

  handleDecrement = todo => {
    const todos = this.state.todos.map(item => {
      if(item.id === todo.id){
        const count = todo.count - 1;
        return {...todo, count: count < 0 ? 0 : count};
      }
      return item;
    });
    this.setState({todos});
  }

  handleDelete = todo => {
    const todos = this.state.todos.filter(item => item.id != todo.id);
    this.setState({todos});
  }

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
