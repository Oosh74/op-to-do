class ToDoList {
  constructor() {
    this.toDoList = [];
  }

  addToDo(toDoItem) {
    this.toDoList.push(toDoItem);
  }

  getList() {
    return this.toDoList;
  }
}

export { ToDoList };
