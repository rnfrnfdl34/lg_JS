const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoForm = document.getElementById("todo-form");

const TODOS_KEY = "todos";

let toDos = [];



function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo=>toDo.id!==parseInt(li.id));
  //function noName(todo){
  //  return todo.id !== li.id }
  saveToDos()
  
}


function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id : Date.now()
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id=newTodo.id;
  const span = document.createElement("span"); 
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  //forEach 함수는 paintToDo 함수를 parsedToDos 배열의 요소마다 실행
  //parsedToDos.forEach((item) => console.log("this is the turn of ", item));
  //forEach: array에 있는 item에 대해 실행
  // Arrow function(=>) 는
  //function sayHello(item){
  //  console.log("this is the turn of",item)}와 동일
}