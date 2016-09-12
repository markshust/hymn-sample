import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';
import App from '../components/App';

const stories = storiesOf('App', module);

stories.add('Text Element', () => (
  <App>{text('Content', 'Hello World')}</App>
));

stories.add('Component', () => (
  <App>
    <div>{text('Content', 'Hello World')}</div>
  </App>
));
