import React from 'react';
import AddTodo from '../../containers/AddTodo';
import TodoList from '../../containers/TodoList';
import FilterLinks from '../FilterLinks';

const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <FilterLinks />
  </div>
);

export default TodoApp;
