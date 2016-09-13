import React from 'react';
import {
  findRenderedDOMComponentWithTag,
  renderIntoDocument,
  Simulate,
} from 'react-addons-test-utils';
import Main from '../Main';

describe('<Main /> state', () => {
  it('renders with default state', () => {
    const component = renderIntoDocument(<Main />);

    expect(component.state.counter).toEqual(0);
  });

  it('state updates on click', () => {
    const component = renderIntoDocument(<Main />);
    const button = findRenderedDOMComponentWithTag(component, 'button');

    Simulate.click(button);

    expect(component.state.counter).toEqual(1);
  });
});
