import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import { number } from '@kadira/storybook-addon-knobs';
import Hello from './Hello';

const stories = storiesOf('welcome/Hello', module);

stories.add('Hello', () => (
  <Hello
    counter={number('Counter', 0)}
    onClick={action('click')}
  />
));
