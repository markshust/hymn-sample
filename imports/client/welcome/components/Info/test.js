import React from 'react';
import { renderCheck } from 'utils/testChecks';
import Info from './Info';

describe('<Info />', () => {
  it('renders correctly', () => {
    renderCheck(<Info />);
  });
});
