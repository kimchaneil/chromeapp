const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button"); //이러한 방식도 가능하지만 애초에 const loginButton = document.queryselector("#login-form button")의 형태도 가능

function onLoginSubmit(event){
    event.preventDefault(); //자동으로 브라우저에서 새로고침을 하는 것을 방지
    console.log(loginInput.value);
}
loginForm.addEventListener("submit",onLoginSubmit)