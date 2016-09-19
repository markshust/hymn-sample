import React, { PropTypes } from 'react';
import ListItem from 'client/core/components/ListItem';

const TodoList = ({
  todos,
  onTodoClick,
}) => (
  <ul>
    {todos.map(todo => (
      <ListItem
        isStriked={todo.completed}
        key={todo.id}
        id={todo.id}
        onClick={onTodoClick}
      >
        {todo.text}
      </ListItem>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool,
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
