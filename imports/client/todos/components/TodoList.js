import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({
  todos,
  onTodoClick,
}) => (
  <ul>
    {todos.map(todo => (
      <Todo
        completed={todo.completed}
        key={todo.id}
        id={todo.id}
        onClick={onTodoClick}
        text={todo.text}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
