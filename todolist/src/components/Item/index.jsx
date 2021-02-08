import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  handleCheck = (id) => {
    return (event) => {
      console.log(id);
      this.props.updateTodo(id, event.target.checked);
    };
  };
  render() {
    const { id, name, deleteTodo, todoToTop } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={false}
          onChange={this.handleCheck(id)}
        />
        <span>{name}</span>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          删除
        </button>
        <button onClick={() => todoToTop(id)} className="btn btn-danger">
          置顶
        </button>
      </li>
    );
  }
}
