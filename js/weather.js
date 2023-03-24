
const API_KEY="d86426eb3e3f7251ce3949485e696451"
function onGeoOK (position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url ='https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}'
    console.log(url);
    fetch(url);
}//https://openweathermap.org/api 사이트
function onGeoError(){
    alert("can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
// 새 계정을 만들고 오류가 있답니다 이건 나중에 차후 다시 해볼것