import React from 'react';
import { snap } from '/imports/utils/testUtils';
import Main from '../Main';

describe('<Main />', () => {
  it('renders correctly', () => {
    snap(<Main />);
  });
});
