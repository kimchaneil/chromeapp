const toDOForm = document.getElementById("todo-form");
const toDOInput = toDOForm.querySelector("input"); //document.querySelector("#todo-form input")
const toDOList = document.getElementById("todo-list");

const toDos = [];
function savetoDos(){
    localStorage.setItem("todos",JSON.stringify(toDos)); //JSON stringify는 문자열로 저장을 해주는 기능을 가짐
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    span.innerText = newTodo;
    toDOList.appendChild(li);
    //console.log(li);
    li.appendChild(button);
}
function deleteToDo(event){
   const li =event.target.parentElement;
   li.remove();
}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDOInput.value;
    console.log(toDOInput.value);
    toDOInput.value = "";
    toDos.push(newTodo);
    //console.log(newTodo,toDOInput.value);
    paintToDo(newTodo);
    savetoDos();
}

toDOForm.addEventListener("submit",handleToDoSubmit);