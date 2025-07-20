class ToDoItem {
  constructor(data) {
    console.log('the data', data);
    Object.assign(this, data);
  }
}

export { ToDoItem };
