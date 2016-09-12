import React from 'react';
import { snap } from '/imports/utils/testUtils';
import Button from '../Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    snap(
      <Button
        label="My Label"
        onClick={() => {}}
      />
    );
  });
});
