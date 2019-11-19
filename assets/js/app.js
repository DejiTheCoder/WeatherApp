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

const key = "";

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