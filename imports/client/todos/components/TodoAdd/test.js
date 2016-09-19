import React from 'react';
import { renderCheck } from 'utils/testChecks';
import TodoAdd from './TodoAdd';

const onSubmit = jest.fn();

describe('<TodoAdd />', () => {
  it('renders correctly', () => {
    renderCheck(
      <TodoAdd onSubmit={onSubmit} />
    );
  });
});
