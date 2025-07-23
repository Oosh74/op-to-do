const renderList = (newList) => {
  const listContainer = document.querySelector('.list');

  listContainer.innerHTML = '';

  newList.getList().forEach((item) => {
    const toDoItemContainer = document.createElement('div');
    toDoItemContainer.classList.add('to-do-item');

    for (const property in item) {
      const toDoData = document.createElement('p');
      toDoData.textContent = item[property];
      toDoItemContainer.append(toDoData);
    }

    listContainer.append(toDoItemContainer);
  });
};

export { renderList };

//refactor to a class
//array state that "syncs" to the to do list logic
//basically just re-render the list anytime an action is taken (add, remove, edit)
//Get items from the logic
//loop through items and render (spread operator???)
//Call for a render each time the state is changed
