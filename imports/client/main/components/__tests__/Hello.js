import React from 'react';
import { snap } from '/imports/utils/testUtils';
import Hello from '../Hello';

const onClick = jest.fn();

describe('<Hello />', () => {
  it('renders correctly', () => {
    snap(
      <Hello
        onClick={onClick}
        counter={0}
      />
    );
  });

  it('renders incremented value', () => {
    snap(
      <Hello
        onClick={onClick}
        counter={1}
      />
    );
  });
});
