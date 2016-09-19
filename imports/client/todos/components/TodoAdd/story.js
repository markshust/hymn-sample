import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TodoAdd from './TodoAdd';

const stories = storiesOf('todos/TodoAdd', module);

stories.add('Standard', () => (
  <TodoAdd onSubmit={action('submit')} />
));
