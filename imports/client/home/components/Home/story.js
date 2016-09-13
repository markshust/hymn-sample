import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Home from './Home';

const stories = storiesOf('home/Home', module);

stories.add('Home', () => (
  <Home />
));
