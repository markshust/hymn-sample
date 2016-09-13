import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';
import Button from './Button';

const stories = storiesOf('Button', module);

stories.add('Button', () => (
  <Button
    label={text('Label', 'My Button')}
    onClick={action('click')}
  />
));

stories.add('Without Label', () => (
  <Button
    onClick={action('click')}
  />
));
