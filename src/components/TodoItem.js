import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { todo } = this.props;
    return <li>{todo.title}</li>;
  }
}

export default TodoItem;
