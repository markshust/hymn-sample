import React from 'react';
import { renderCheck } from '/imports/utils/testChecks';
import Info from './Info';

describe('<Info />', () => {
  it('renders correctly', () => {
    renderCheck(<Info />);
  });
});
