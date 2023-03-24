const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button"); //이러한 방식도 가능하지만 애초에 const loginButton = document.queryselector("#login-form button")의 형태도 가능

function onLoginBtnClick(){
    const usrname = loginInput.value;
    if( usrname === ""){
        alert("plz write your name");

    }else if(usrname.length >= 15){
        alert("ur name is too long");
    }
}
loginButton.addEventListener("click",onLoginBtnClick)