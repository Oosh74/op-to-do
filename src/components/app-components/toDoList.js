class ToDoList {
  constructor() {
    this.toDoList = [];
  }

  addToDo(toDoItem) {
    this.toDoList.push(toDoItem);
  }

  getList() {
    console.log(this.toDoList.length);
    return this.toDoList;
  }
}

export { ToDoList };
