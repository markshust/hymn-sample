import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Info from './Info';

const stories = storiesOf('home/Info', module);

stories.add('Info', () => (
  <Info />
));
