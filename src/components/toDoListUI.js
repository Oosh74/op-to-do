const renderList = (newList) => {
  console.log('new list', newList.getList());
  newList.getList().forEach((item) => {
    for (const property in item) {
      console.log(item);
      let toDoData = document.createElement('p');
      toDoData.textContent = item[property];
      document.querySelector('body').append(toDoData);
    }
  });
};

export { renderList };
