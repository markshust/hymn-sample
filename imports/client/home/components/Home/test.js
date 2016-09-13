import React from 'react';
import { renderCheck } from 'utils/testChecks';
import Home from './Home';

describe('<Home />', () => {
  it('renders correctly', () => {
    renderCheck(<Home />);
  });
});
