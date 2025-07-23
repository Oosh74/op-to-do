import './styles.css';
import {
  ToDoList,
  toDoListProjects,
} from './components/app-components/toDoList.js';
import { ToDoForm } from './components/app-components/form.js';

const toDoListInstance = new ToDoList();

ToDoForm(toDoListInstance);
toDoListProjects();

export { toDoListInstance };
