import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';
import Link from './Link';

const stories = storiesOf('core/Link', module);

stories.add('Standard', () => (
  <Link
    href="#"
    onClick={action('click')}
  >
    {text('Text', 'Some Text')}
  </Link>
));

stories.add('With ID', () => (
  <Link
    href="#"
    id={text('ID', 1)}
    onClick={action('click')}
  >
    {text('Text', 'Some Text')}
  </Link>
));
