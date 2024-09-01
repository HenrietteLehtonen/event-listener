// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const lista = document.querySelector('#target');
const addBtn = document.querySelector('.add-btn');
const dialogi = document.querySelector('dialog');

const buildHTML = function (todo, checkAttr) {
  return `<li id="list-${todo.id}">
          <button id="delete-${todo.id}"> x </button>
          <input type="checkbox" id="todo-${todo.id}" ${checkAttr}>
          <label for="todo-${todo.id}">${todo.task}</label>
          </li>`;
};

const deleteBtnListener = function (todo) {
  // deletebutton
  const deleteBtn = document.querySelector(`#delete-${todo.id}`);
  deleteBtn.addEventListener('click', function () {
    const todoIndex = todoList.findIndex(function (deleteItem) {
      return deleteItem.id === todo.id;
    });
    todoList.splice(todoIndex, 1);
    lista.removeChild(document.querySelector(`#list-${todo.id}`));
    console.log('Listalta poistettu: ' + todo.id);
  });
};

const checkboxBtnListener = function (todo) {
  const checkbox = document.querySelector(`#todo-${todo.id}`);
  checkbox.addEventListener('click', function () {
    todo.completed = !todo.completed;
    console.log(todo);
  });
};

for (let todo of todoList) {
  let checkAttr = '';
  if (todo.completed === true) {
    checkAttr = 'checked';
  } else {
    todo.completed === false;
    checkAttr = 'unchecked';
  }
  console.log(todo);

  let html = buildHTML(todo, checkAttr);

  lista.insertAdjacentHTML('beforeend', html);

  // checkboxi update

  deleteBtnListener(todo);
  checkboxBtnListener(todo);
}

// dialogi auki Add Todo Item napista
addBtn.addEventListener('click', function () {
  dialogi.showModal();
});

// add to do list
const save = document.querySelector('#save-btn');
save.addEventListener('click', function () {
  const id = todoList[todoList.length - 1].id + 1;
  let todo = {
    id: id,
    task: document.querySelector('#input').value,
    completed: false,
  };
  let html = buildHTML(todo, 'unchecked');
  lista.insertAdjacentHTML('beforeend', html);
  todoList.push(todo);
  deleteBtnListener(todo);
  checkboxBtnListener(todo);
  dialogi.close();
});
