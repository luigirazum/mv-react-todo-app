import React from 'react';

// style module
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { todo, deleteTodoProps } = this.props;

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => {
            const { handleChangeProps } = this.props;
            handleChangeProps(todo.id);
          }}
        />
        <button
          onClick={() => deleteTodoProps(todo.id)}
        >
          Delete
        </button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </li>
    );
  }
}

export default TodoItem;
