import React from 'react';
import { renderCheck } from 'utils/testChecks';
import TodoList from './TodoList';

const onSubmit = jest.fn();

describe('<TodoList />', () => {
  it('renders no todos', () => {
    const todos = [];

    renderCheck(
      <TodoList
        onTodoClick={onSubmit}
        todos={todos}
      />
    );
  });

  it('renders with todos', () => {
    const todos = [{
      completed: false,
      id: 'a',
      text: 'item a',
    }, {
      completed: true,
      id: 'b',
      text: 'item b',
    }];

    renderCheck(
      <TodoList
        onTodoClick={onSubmit}
        todos={todos}
      />
    );
  });
});
