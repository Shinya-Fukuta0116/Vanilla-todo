// selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


// function

function addTodo(event) {
  event.preventDefault();
  // todoDiv
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  // Add Todo to localStrage
  saveLocalTodos(todoInput.value);

  // Check Mark Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('completed-btn');
  todoDiv.appendChild(completedButton);

  // Check Trash Button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  // Append To List

  todoList.appendChild(todoDiv);

  // Clear Todo Input Value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // Dlete Item
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }

  // Check Mark
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = 'flex';
        break;
      case "completed":
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  let todos = new Array();
  if (localStorage.getItem(todos) === null) {
    todo = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem(todos) === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function (todo) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);

    // Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Append To List

    todoList.appendChild(todoDiv);
  })
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem(todos) === null) {
    todo = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

}
