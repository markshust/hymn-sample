import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';
import App from './App';

const stories = storiesOf('core/App', module);
const Dummy = () => (
  <div>{text('Content', 'This is a component')}</div>
);

stories.add('Text Child', () => (
  <App>{text('Content', 'This is text')}</App>
));

stories.add('Component Child', () => (
  <App>
    <Dummy />
  </App>
));
