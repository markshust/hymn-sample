import React from 'react';
import { renderCheck } from 'utils/testChecks';
import ListItem from './ListItem';

const onClick = jest.fn();

describe('<ListItem />', () => {
  it('renders with text', () => {
    renderCheck(
      <ListItem>Some Text</ListItem>
    );
  });

  it('renders with text and onClick', () => {
    renderCheck(
      <ListItem onClick={onClick}>Some Text</ListItem>
    );
  });

  it('renders with isStriked', () => {
    renderCheck(
      <ListItem isStriked>Striked Out</ListItem>
    );
  });
});
