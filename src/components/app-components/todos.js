class ToDoItem {
  constructor(data) {
    console.log('the data', data);
    Object.assign(this, data);
    this.id = crypto.randomUUID();
    console.log('the data', data);
  }
}

export { ToDoItem };
