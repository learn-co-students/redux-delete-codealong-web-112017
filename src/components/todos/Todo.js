import React, { Component } from 'react';

class Todo extends Component {
  handleOnClick = (e) => {

    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id

    });
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleOnClick} />
      </li>
    );
  }
};

export default Todo
