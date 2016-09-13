import React from 'react';
import { renderCheck } from '/imports/utils/testChecks';
import Hello from './Hello';

const onClick = jest.fn();

describe('<Hello />', () => {
  it('renders correctly', () => {
    renderCheck(
      <Hello
        counter={0}
        onClick={onClick}
      />
    );
  });
});
