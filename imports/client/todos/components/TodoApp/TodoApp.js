import React from 'react';
import TodoAdd from '../../containers/TodoAdd';
import TodoList from '../../containers/TodoList';
import TodoFilterLinks from '../TodoFilterLinks';

const TodoApp = () => (
  <div>
    <TodoAdd />
    <TodoList />
    <TodoFilterLinks />
  </div>
);

export default TodoApp;
