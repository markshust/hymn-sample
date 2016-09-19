import React from 'react';
import { renderCheck } from 'utils/testChecks';
import TodoFilterLink from './TodoFilterLink';

const onSubmit = jest.fn();

describe('<TodoFilterLink />', () => {
  it('renders correctly', () => {
    renderCheck(
      <TodoFilterLink onClick={onSubmit}>
        Test
      </TodoFilterLink>
    );
  });
});

describe('<TodoFilterLink />', () => {
  it('renders correctly when active', () => {
    renderCheck(
      <TodoFilterLink
        isActive
        onClick={onSubmit}
      >
        Test
      </TodoFilterLink>
    );
  });
});
