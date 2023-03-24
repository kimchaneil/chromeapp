const clock = document.querySelector("#clock")

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

}
getClock();
setInterval(getClock,1000); //실행시킬 함수, 밀리초(5초=5000)으로 작성