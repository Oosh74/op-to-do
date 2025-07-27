const projectClassStore = [];

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

const newProjectForm = () => {
  const projectForm = document.querySelector('#project-form');
  const projectOptionsField = document.querySelector('.project-list-group');

  projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newProject = new Project(event.target[0].value);
    newProject.addToDo('Get groceries');
    newProject.addToDo('take a piss');
    newProject.removeToDo('Get groceries');
    projectClassStore.push(newProject);
    projectForm.reset();

    projectClassStore.map((project) => {
      const projectOption = document.createElement('option');
      projectOption.textContent = project.projectName;
      projectOptionsField.append(projectOption);
    });
  });
};

export { ToDoList, newProjectForm };
