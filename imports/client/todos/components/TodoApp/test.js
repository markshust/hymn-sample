jest.mock('../../containers/AddTodo');
jest.mock('../../containers/TodoList');
jest.mock('../../containers/FilterLink');

/* eslint-disable import/imports-first */
import React from 'react';
import { renderCheck } from 'utils/testChecks';
import TodoApp from './TodoApp';
/* eslint-enable import/imports-first */

describe('<TodoApp />', () => {
  it('renders correctly', () => {
    renderCheck(
      <TodoApp />
    );
  });
});
