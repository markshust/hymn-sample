jest.mock('../../containers/FilterLink');

/* eslint-disable import/imports-first */
import React from 'react';
import { renderCheck } from 'utils/testChecks';
import FilterLinks from './FilterLinks';
/* eslint-enable import/imports-first */

describe('<FilterLinks />', () => {
  it('renders correctly', () => {
    renderCheck(
      <FilterLinks />
    );
  });
});
