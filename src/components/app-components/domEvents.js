//One-off DOM events will go here
// example: toggle light mode

const newProjectForm = () => {
  let projectForm = document.querySelector('#project-form');
  projectForm.addEventListener('submit', (event) => {
    console.log(event);
  });
};

newProjectForm;
