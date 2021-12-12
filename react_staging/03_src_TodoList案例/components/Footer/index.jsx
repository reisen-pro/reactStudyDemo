import React, {Component} from 'react';
import './index.css'

class Footer extends Component {

  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  }

  clearAllDone = () => {
    this.props.clearAllDone();
  }

  render() {
    const {todos} = this.props;
    // 计算已完成的个数
    const doneCount = todos.reduce((pre, current) =>
      pre + (current.done ? 1 : 0), 0);
    const total = todos.length;

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.clearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}

export default Footer;
