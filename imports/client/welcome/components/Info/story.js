import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Info from './Info';

const stories = storiesOf('welcome/Info', module);

stories.add('Info', () => (
  <Info />
));
