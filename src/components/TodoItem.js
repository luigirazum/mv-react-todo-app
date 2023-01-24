import React from 'react';
import PropTypes from 'prop-types';

// style module
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

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

    const viewMode = {};
    const editMode = {};
    const { editing } = this.state;

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
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
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            console.log(e.target.value, id);
          }}
        />
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
