import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'

class App extends Component {

  // 初始化状态
  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '打代码', done: false},
    ]
  }

  addTodo = (todo) => {
    // 获取原todos
    const {todos} = this.state;
    // 追加一个todo
    const newTodos = [todo, ...todos];
    this.setState({todos: newTodos})
  }

  // 用于更新一个todo对象
  updateTodo = (id, done) => {
    // 读取状态中的todos
    const {todos} = this.state;
    // 匹配处理数据
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, done: done}
      } else return todo;
    })
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-warp">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo}/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;

