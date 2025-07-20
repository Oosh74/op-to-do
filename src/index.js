import './styles.css';
// import { ToDoFactory } from './components/todoFactory.js';
import { ToDoList } from './components/toDoList.js';
import { ToDoForm } from './components/form.js';

const toDoListInstance = new ToDoList();

ToDoForm(toDoListInstance);
// console.log(ToDoList.getList());
