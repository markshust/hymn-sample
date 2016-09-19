import React from 'react';
import { renderCheck } from 'utils/testChecks';
import Link from './Link';

const onClick = jest.fn();

describe('<Link />', () => {
  it('renders with text', () => {
    renderCheck(
      <Link>Some Text</Link>
    );
  });

  it('renders with text and onClick', () => {
    renderCheck(
      <Link onClick={onClick}>Some Text</Link>
    );
  });

  it('renders with text and onClick, id', () => {
    renderCheck(
      <Link
        id="abc"
        onClick={onClick}
      >
        Some Text
      </Link>
    );
  });
});
