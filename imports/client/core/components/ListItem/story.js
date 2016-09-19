import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { boolean, text } from '@kadira/storybook-addon-knobs';
import ListItem from './ListItem';

const stories = storiesOf('core/ListItem', module);

stories.add('Standard', () => (
  <ListItem onClick={action('click')}>
    {text('Text', 'Some Text')}
  </ListItem>
));

stories.add('Striked', () => (
  <ListItem
    isStriked={boolean('Is Striked', true)}
    onClick={action('click')}
  >
    {text('Text', 'Some Text')}
  </ListItem>
));
