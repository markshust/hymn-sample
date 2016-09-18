import React from 'react';
import AddTodo from './AddTodo';
import TodoList from '../containers/TodoList';
import Footer from './Footer';

const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default TodoApp;
