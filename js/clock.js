const clock = document.querySelector("#clock")

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${Minutes}:${Seconds}`;
//padstart는 문자열의 크기를 2로 지정한 후 빈 앞부분 만큼을 0으로 채우라는 뜻
}
getClock();
setInterval(getClock,1000); //실행시킬 함수, 밀리초(5초=5000)으로 작성