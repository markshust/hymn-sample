import React from 'react';
import TodoFilterLink from '../../containers/TodoFilterLink';

const TodoFilterLinks = () => (
  <p>
    Show:
    {" "}
    <TodoFilterLink filter="SHOW_ALL">
      All
    </TodoFilterLink>
    {", "}
    <TodoFilterLink filter="SHOW_ACTIVE">
      Active
    </TodoFilterLink>
    {", "}
    <TodoFilterLink filter="SHOW_COMPLETED">
      Completed
    </TodoFilterLink>
  </p>
);

export default TodoFilterLinks;
