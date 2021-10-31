const todoBox = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todoInput");
const todoForm = document.querySelector(".todo-box");

let todos = [];

const TODOS_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodos(event) {
  const deleteContent = event.target.parentElement;
  deleteContent.remove();
  todos = todos.filter((todo) => String(todo.id) !== deleteContent.id);
  saveTodos();
}

function paintTodos(todos) {
  const todoList = document.createElement("li");
  todoList.id = todos.id;
  todoList.classList.add("todo-list__text");
  const listSpan = document.createElement("span");
  listSpan.innerText = todos.title;
  const listBtn = document.createElement("button");
  listBtn.innerHTML = "⚑";
  listBtn.classList.add("todo-list__btn");
  listBtn.addEventListener("click", deleteTodos);
  todoList.appendChild(listSpan);
  todoList.appendChild(listBtn);
  todoBox.appendChild(todoList);
}

function handleSubmit(event) {
  event.preventDefault();
  const inputText = todoInput.value;
  todoInput.value = "";
  const todoContetnArr = {
    title: inputText,
    id: Date.now(),
  };
  todos.push(todoContetnArr);
  paintTodos(todoContetnArr);
  saveTodos();
}

todoForm.addEventListener("submit", handleSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
  const parseTodos = JSON.parse(savedTodos);
  todos = parseTodos;
  parseTodos.forEach(paintTodos);
}
