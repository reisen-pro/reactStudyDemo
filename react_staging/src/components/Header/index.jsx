import React, {Component} from 'react';
import './index.css'

class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入您的任务名称，按回车键确认"/>
      </div>
    )
  }
}

export default Header;
