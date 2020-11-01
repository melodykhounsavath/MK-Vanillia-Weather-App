function displayTemperature(response) {
    console.log(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;

    let conditionElement = document.querySelector("#condition");
    conditionElement.innerHTML = response.data.weather[0].description;

    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;

    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round (response.data.wind.speed);
}

let apiKey = "63f2d724151d398c21d686753801c73b";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Anchorage&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature);