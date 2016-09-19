import React from 'react';
import { renderCheck } from 'utils/testChecks';
import AddTodo from './AddTodo';

const onSubmit = jest.fn();

describe('<AddTodo />', () => {
  it('renders correctly', () => {
    renderCheck(
      <AddTodo onSubmit={onSubmit} />
    );
  });
});
