import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import FinishedItem from "../FinishedItem";
import "./index.css";

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    finished: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    deleteFinished: PropTypes.func.isRequired,
  };

  render() {
    const {
      todos,
      finished,
      updateTodo,
      deleteTodo,
      deleteFinished,
      todoToTop,
      finishedToTop,
    } = this.props;
    const finishedCount = finished.length;
    const todoCount = todos.length;
    return (
      <section>
        <h2>
          正在进行
          <span>{todoCount}</span>
        </h2>
        <ul className="todo-main">
          {todos.map((todo) => {
            return (
              <Item
                key={todo.id}
                {...todo}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                todoToTop={todoToTop}
              />
            );
          })}
        </ul>
        <h2>
          已经完成
          <span>{finishedCount}</span>
        </h2>
        <ul className="todo-main">
          {finished.map((done) => {
            return (
              <FinishedItem
                key={done.id}
                {...done}
                updateTodo={updateTodo}
                deleteFinished={deleteFinished}
                finishedToTop={finishedToTop}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}
