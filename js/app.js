const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button"); //이러한 방식도 가능하지만 애초에 const loginButton = document.queryselector("#login-form button")의 형태도 가능
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden"
function onLoginSubmit(event){
    event.preventDefault(); //자동으로 브라우저에서 새로고침을 하는 것을 방지
    const username = loginInput.value;
    localStorage.setItem("usrname",username) //saving username to local storage key"usrname"
    loginForm.classList.add(HIDDEN_CLASSNAME)
    greeting.innerText ="Hello " + username;
    greeting.innerText =`Hello ${username}`; // ' 가아닌 `임
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit",onLoginSubmit);
const savedName = localStorage.getItem("usrname")
console.log(savedName);
if(savedName === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greetings 
    greeting.innerText = `Hello ${savedName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
   
}