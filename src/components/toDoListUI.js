const renderList = (newList) => {
  newList.getList().forEach((item) => {
    for (const property in item) {
      let toDoData = document.createElement('p');
      toDoData.textContent = item[property];
      document.querySelector('body').append(toDoData);
    }
  });
};

export { renderList };
