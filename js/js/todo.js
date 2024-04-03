const toDoForm=document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");
const toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));//object or array makeing string
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.append(button);  
    toDoList.appendChild(li);
} 

function sayHello(){
    console.log("hello");
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(sayHello);
}

function handleToDoSubmit(event){
    event.preventDefault(); 
    const newTodo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos()
}

toDoForm.addEventListener("submit",handleToDoSubmit);
