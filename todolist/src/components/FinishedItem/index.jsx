import React, { Component } from "react";
import "./index.css";

export default class finishedItem extends Component {
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };
  render() {
    const { id, name, deleteFinished, finishedToTop } = this.props;
    return (
      <li
      >
        <input
          type="checkbox"
          defaultChecked={true}
          onChange={this.handleCheck(id)}
        />
        <span>{name}</span>
        <button
          onClick={() => deleteFinished(id)}
          className="btn btn-danger"
        >
          删除
        </button>
        <button
          onClick={() => finishedToTop(id)}
          className="btn btn-danger"
        >
          置顶
        </button>
      </li>
    );
  }
}
