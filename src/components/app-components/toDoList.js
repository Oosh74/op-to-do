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

  removeToDo(removeTargetId) {
    return (this.toDoList = this.toDoList.filter((todo) => {
      return todo.id !== removeTargetId;
    }));
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
  newProject.addToDo('Get groceries', 'take a piss');
  console.log(newProject);
  newProject.removeToDo('Get groceries');
  console.log(newProject);
};

export { ToDoList, toDoListProjects };
