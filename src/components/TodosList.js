import React from 'react';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
}

export default TodosList;
