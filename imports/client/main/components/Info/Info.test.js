import React from 'react';
import { renderCheck } from '/imports/utils/testUtils';
import Info from './Info';

describe('<Info />', () => {
  it('renders correctly', () => {
    renderCheck(<Info />);
  });
});
