function onGeoOK (position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in",lat ,lng);
}//https://openweathermap.org/api사이트
function onGeoError(){
    alert("can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);