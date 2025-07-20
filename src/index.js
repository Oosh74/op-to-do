import './styles.css';
import { ToDoList } from './components/toDoList.js';
import { ToDoForm } from './components/form.js';

const toDoListInstance = new ToDoList();

ToDoForm(toDoListInstance);
