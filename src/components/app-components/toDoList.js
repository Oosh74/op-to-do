class ToDoList {
  constructor() {
    this.toDoList = [];
  }

  get getList() {
    console.log(this.toDoList.length);
    return this.toDoList;
  }

  addToDo(toDoItem) {
    this.toDoList.push(toDoItem);
  }

  removeToDo(todo) {
    this.toDoList = this.toDoList.filter((currToDo) => currToDo !== todo);
  }
}

class Project extends ToDoList {
  constructor(projectName) {
    super();
    this.projectName = projectName;
  }
}

const toDoListProjects = () => {
  const newProject = new Project('Due Today');
  return console.log(newProject);
};

export { ToDoList, toDoListProjects };
