import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Welcome from './Welcome';

const stories = storiesOf('welcome/Welcome', module);

stories.add('Welcome', () => (
  <Welcome />
));
