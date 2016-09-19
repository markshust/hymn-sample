jest.mock('../../containers/TodoFilterLink');

/* eslint-disable import/imports-first */
import React from 'react';
import { renderCheck } from 'utils/testChecks';
import TodoFilterLinks from './TodoFilterLinks';
/* eslint-enable import/imports-first */

describe('<TodoFilterLinks />', () => {
  it('renders correctly', () => {
    renderCheck(
      <TodoFilterLinks />
    );
  });
});
