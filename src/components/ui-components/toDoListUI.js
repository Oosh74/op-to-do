import { toDoListInstance } from '../..';

const renderList = (newList) => {
  const listContainer = document.querySelector('.list');

  listContainer.innerHTML = '';

  // if (newList.getList.) {
  //   return;
  // }

  newList.getList.forEach((item) => {
    const toDoListContainer = document.createElement('div');
    toDoListContainer.classList.add('to-do-item');

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = 'Complete Task';
    completeBtn.addEventListener('click', (event) => {
      console.log('dataset', event.target.parentElement.dataset.id);
      toDoListInstance.removeToDo(event.target.parentElement.dataset.id);
      renderList(toDoListInstance);
    });

    for (const property in item) {
      if (property !== 'id') {
        const toDoData = document.createElement('p');
        toDoData.textContent = item[property];
        toDoListContainer.append(toDoData);
      } else {
        toDoListContainer.dataset.id = item[property];
      }
    }
    toDoListContainer.append(completeBtn);

    listContainer.append(toDoListContainer);
  });
};

export { renderList };
