import React from 'react';
import { renderCheck } from 'utils/testChecks';
import App from './App';

describe('<App />', () => {
  it('renders correctly', () => {
    renderCheck(
      <App>
        <div>Test</div>
      </App>
    );
  });
});
