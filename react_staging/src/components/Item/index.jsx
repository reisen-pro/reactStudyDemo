import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

class Item extends Component {

  // 对接受的props进行：类型、必要性限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired
  }

  state = {mouse: false}

  // 鼠标移入、移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  // 勾选、取消某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  handleDelete = (id) => {
    if (window.confirm('确定删除吗？'))
      this.props.deleteTodo(id);
  }

  render() {
    const {id, name, done} = this.props;
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)}
          onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger"
                style={{display: mouse ? 'block' : 'none'}}>删除
        </button>
      </li>);
  }
}

export default Item;
