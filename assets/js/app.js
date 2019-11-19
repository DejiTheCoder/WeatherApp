const iconElement = document.querySelelctor(".weather-icon");
const tempElement = document.querySelelctor(".temperature-value p");
const descElement = document.querySelelctor(".temperature-description p");
const locationElement = document.querySelelctor(".location p");
const notificationElement = document.querySelelctor(".notification");

const weather = {};
weather.temperature = {
    unit: "celsius"
}

const KELVIN = 273;

const key = "31365cfe0982f30465153822c8e7344b";

if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

function showError(error){
    notificationElement.style.display = "block";
    notificationElement.style.innerHTML = `<p>${error.message}</p>`;
}

function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?
    lat=${latitude}&lon=${longitude}&appid=${key}`

    console.log(api);
}