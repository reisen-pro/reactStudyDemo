import React, {Component} from 'react';
import Item from "../Item";
import './index.css'

class List extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <ul className="todo-main">
          <Item/>
          <Item/>
        </ul>
      </div>
    );
  }
}

export default List;
