import React from 'react';
import find from 'lodash/find';
import { componentCheck, renderCheck } from 'utils/testChecks';
import Hello from './Hello';

describe('Container(<Hello />)', () => {
  it('updates counter', () => {
    const { component, tree } = renderCheck(<Hello />);
    const Button = find(tree.children, { type: 'button' });

    Button.props.onClick();

    componentCheck(component);
  });
});
