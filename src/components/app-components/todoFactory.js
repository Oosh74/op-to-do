import { ToDoItem } from './todos.js';

class ToDoFactory {
  static createNewTodo(data) {
    return new ToDoItem(data);
  }
}

export { ToDoFactory };
