const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button"); //이러한 방식도 가능하지만 애초에 const loginButton = document.queryselector("#login-form button")의 형태도 가능

function onLoginBtnClick(){
    console.dir(loginInput)
    console.log("hello",loginInput.value)
}
loginButton.addEventListener("click",onLoginBtnClick)