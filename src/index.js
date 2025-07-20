import './styles.css';
import { ToDoList } from './components/app-components/toDoList.js';
import { ToDoForm } from './components/app-components/form.js';

const toDoListInstance = new ToDoList();

ToDoForm(toDoListInstance);
