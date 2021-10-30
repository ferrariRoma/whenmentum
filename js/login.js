const loginInput = document.querySelector(".login-box");
const main = document.querySelector(".main-box");
const inputText = document.querySelector(".login-box input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASS = "hidden";
const LOCAL_KEY = "todos";

function handleSubmit(event) {
  event.preventDefault();
  const username = inputText.value;
  loginInput.classList.add(HIDDEN_CLASS);
  localStorage.setItem(LOCAL_KEY, username);
  greeting.innerText = `Hello, ${username}`;
  main.classList.remove(HIDDEN_CLASS);
}

const checkKey = localStorage.getItem(LOCAL_KEY);
if (checkKey === null) {
  loginInput.classList.remove(HIDDEN_CLASS);
  loginInput.addEventListener("submit", handleSubmit);
} else {
  main.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello, ${checkKey}`;
}
