import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Main from '../Main';

describe('<Main />', () => {
  it('renders with default state', () => {
    const component = TestUtils.renderIntoDocument(<Main />);

    expect(component.state.counter).toEqual(0);
  });
});
