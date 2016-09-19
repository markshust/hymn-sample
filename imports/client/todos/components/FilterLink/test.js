import React from 'react';
import { renderCheck } from 'utils/testChecks';
import FilterLink from './FilterLink';

const onSubmit = jest.fn();

describe('<FilterLink />', () => {
  it('renders correctly', () => {
    renderCheck(
      <FilterLink onClick={onSubmit}>Test</FilterLink>
    );
  });
});

describe('<FilterLink />', () => {
  it('renders correctly when active', () => {
    renderCheck(
      <FilterLink
        isActive
        onClick={onSubmit}
      >
        Test
      </FilterLink>
    );
  });
});
