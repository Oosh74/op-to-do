import './styles.css';
import { newTodo } from './components/todoFactory.js';

for (const property in newTodo) {
  let toDoData = document.createElement('p');
  toDoData.textContent = newTodo[property];
  document.querySelector('body').append(toDoData);
}
