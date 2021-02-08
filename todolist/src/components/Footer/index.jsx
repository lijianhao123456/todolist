import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleClearTodo = () => {
    this.props.clearTodo();
  };

  render() {
    return (
      <footer className="todo-footer">
        Copyright &copy; 2021 李健豪
        <button onClick={this.handleClearTodo} className="btn btn-danger">
          clear
        </button>
      </footer>
    );
  }
}
