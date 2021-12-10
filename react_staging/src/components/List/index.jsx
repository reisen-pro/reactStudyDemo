import React, {Component} from 'react';
import PropTypes from "prop-types";
import Item from "../Item";
import './index.css'

class List extends Component {

  static propTypes = {
    todos:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired
  }

  render() {
    const {todos,updateTodo} = this.props
    return (
      <div>
        <ul className="todo-main">
          {
            todos.map(todo => {
              return <Item key={todo.id} {...todo} updateTodo={updateTodo}/>
            })
          }
        </ul>
      </div>
    );
  }
}

export default List;
