import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Add Todo..." />
        <button>Submit</button>
      </form>
    );
  }
}

export default InputTodo;
