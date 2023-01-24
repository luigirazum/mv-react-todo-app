import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            const { handleChangeProps } = this.props;
            handleChangeProps(todo.id);
          }}
        />
        {todo.title}
      </li>
    );
  }
}

export default TodoItem;
