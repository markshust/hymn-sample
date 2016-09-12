import React from 'react';
import { snap } from '/imports/utils/testUtils';
import Hello from '../Hello';

describe('<Hello />', () => {
  it('renders correctly', () => {
    snap(
      <Hello
        onClick={() => {
        }}
        counter={0}
      />
    );
  });

  it('renders incremented value', () => {
    snap(
      <Hello
        onClick={() => {
        }}
        counter={1}
      />
    );
  });
});
