import React from 'react';
import { renderCheck } from 'utils/testChecks';
import Welcome from './Welcome';

describe('<Welcome />', () => {
  it('renders correctly', () => {
    renderCheck(<Welcome />);
  });
});
