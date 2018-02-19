import React, { Component } from "react";
import Todo from "./Todo";

class Todos extends Component {
  render() {
    const todos = this.props.store.getState().todos.map((todo, index) => {
      return (
        <Todo
          text={todo.text}
          store={this.props.store}
          id={todo.id}
          key={index}
        />
      );
    });

    return <ul>{todos}</ul>;
  }
}

export default Todos;
