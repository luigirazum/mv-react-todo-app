import React from 'react';
import PropTypes from 'prop-types';

// style module
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { todo } = this.props;
    const { completed, id, title } = todo;
    const { deleteTodoProps } = this.props;

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
          checked={completed}
          onChange={() => {
            const { handleChangeProps } = this.props;
            handleChangeProps(id);
          }}
        />
        <button
          type="button"
          onClick={() => deleteTodoProps(id)}
        >
          Delete
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
};

export default TodoItem;
