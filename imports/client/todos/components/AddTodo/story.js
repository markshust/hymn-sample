import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AddTodo from './AddTodo';

const stories = storiesOf('todos/AddTodo', module);

stories.add('Standard', () => (
  <AddTodo onSubmit={action('submit')} />
));
