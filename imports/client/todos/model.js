const filterActive = todos => todos.filter(t => !t.completed);
const filterCompleted = todos => todos.filter(t => t.completed);

export default {
  filterActive,
  filterCompleted,
};
