const toDOForm = document.getElementById("todo-form");
const toDOInput = toDOForm.querySelector("input"); //document.querySelector("#todo-form input")
const toDOList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDOInput.value;
    console.log(toDOInput.value);
    toDOInput.value = "";
    console.log(newTodo,toDOInput.value);
}

toDOForm.addEventListener("submit",handleToDoSubmit);