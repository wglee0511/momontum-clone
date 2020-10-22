const API_KEY = "439d4b804bc8187953eb36d2a8c26a02";
const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccecc(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
} 

function handleGeoError(){
    console.log("Can not read geo information")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccecc,handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        //getWeather
    }
}

function init(){
    loadCoords();
}

init();