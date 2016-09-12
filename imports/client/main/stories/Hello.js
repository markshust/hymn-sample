import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { number } from '@kadira/storybook-addon-knobs';
import Hello from '../components/Hello';

const stories = storiesOf('Hello', module);

stories.add('Hello', () => (
  <Hello
    counter={number('Counter', 0)}
    onClick={action('clicked')}
  />
));
