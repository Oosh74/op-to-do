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
