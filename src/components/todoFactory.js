import { ToDoItem } from './todos.js';

class ToDoFactory {
  static createNewTodo(data) {
    return new ToDoItem(data);
  }
}

const newTodo = ToDoFactory.createNewTodo({
  title: 'Go Shopping',
  description: 'Go food shopping at Aldi',
  dueDate: 'Tomorrow',
  priority: 'High',
});

export { newTodo };
