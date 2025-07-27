import { ToDoFactory } from './todoFactory.js';
import { renderList } from '../ui-components/toDoListUI.js';

const ToDoForm = (toDoListInstance) => {
  const form = document.querySelector('#task-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    const newToDo = ToDoFactory.createNewTodo(formObject);
    toDoListInstance.addToDo(newToDo);
    renderList(toDoListInstance);
    form.reset();
  });
};

export { ToDoForm };
