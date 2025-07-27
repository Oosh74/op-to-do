import './styles.css';
import {
  ToDoList,
  newProjectForm,
} from './components/app-components/toDoList.js';
import { ToDoForm } from './components/app-components/form.js';

const toDoListInstance = new ToDoList();

ToDoForm(toDoListInstance);
newProjectForm();

export { toDoListInstance };
