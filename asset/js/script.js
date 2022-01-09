var cityEl = document.getElementById("enter-city");
var searchEl = document.getElementById("search-button");
var clearEl = document.getElementById("clear-history");
var nameEl = document.getElementById("city-name");
var currentPicEl = document.getElementById("current-pic");
var currentTempEl = document.getElementById("temperature");
var currentHumidityEl = document.getElementById("humidity");
var currentWindEl = document.getElementById("wind-speed");
var currentUVEl = document.getElementById("UV-index");
var historyEl = document.getElementById("history");
var fiveDayEl = document.getElementById("fiveday-header");
var todayWeatherEl = document.getElementById("today-weather");
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

var apiKey = "0cb8906a01cde2e8e9d6527a0953b593";


function getWeather(cityName){
    let weatherApi= "https://api.openweathermap.org/data/2.5/forecast?q=" +cityName + "&appid=" + apiKey;

    fetch(weatherApi)
    .then(function(response){
        console.log(response);
        if (response.ok){
        response.json().then(function(data){
            nameEl.textContent=`${cityEl.value}`;
currentTempEl.textContent=`Temperature: ${data.list[0].main.temp}`;
currentHumidityEl.textContent=`Humidity: ${data.list[0].main.humidity}`;
currentWindEl.textContent=`Wind speed: ${data.list[0].wind.speed}`;
localStorage.setItem( "store",JSON.stringify(data));
todayWeatherEl.classList.remove("d-none");
            console.log(data);
        });
    }else{
        alert("Failed to get weather!");
        todayWeatherEl.classList.add("d-none");
    }
    });
}

async function loadData() {
    let discover = cityEl.value;
    getWeather(discover);
    searchHistory.push(discover);
    console.log("I was clicked");
}

searchEl.addEventListener("click", function(){
    let discover = cityEl.value;
    getWeather(discover);
    searchHistory.push(discover);
    console.log("I was clicked");
});