import React from 'react';
import { snap } from '/imports/utils/testUtils';
import App from '../App';

describe('<App />', () => {
  it('renders correctly', () => {
    snap(
      <App>
        <div>Test</div>
      </App>
    );
  });
});
