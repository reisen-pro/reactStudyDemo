import React, {Component} from 'react';
import PropTypes from "prop-types";
import {nanoid} from "nanoid";
import './index.css'

class Header extends Component {

  // 对接受的props进行：类型、必要性限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  // 键盘事件的回调
  handleKeyUp = (event) => {
    const {keyCode,target} = event;
    // 判断键盘事件是否是回车
    if (keyCode !== 13) return
    if (target.value.trim() === '') return
    // 准备好一个todo对象
    const todoObj = {id:nanoid(),name:target.value,done:false}
    this.props.addTodo(todoObj)
    // 清空输入
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入您的任务名称，按回车键确认"/>
      </div>
    )
  }
}

export default Header;
