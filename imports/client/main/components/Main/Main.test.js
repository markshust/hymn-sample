import React from 'react';
import { renderCheck } from '/imports/utils/testUtils';
import Main from './Main';

describe('<Main />', () => {
  it('renders correctly', () => {
    renderCheck(<Main />);
  });
});
