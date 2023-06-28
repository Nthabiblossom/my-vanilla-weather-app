function displayTemperature(response) {
  console.log(response.data);

  let descriptionElement = document.querySelector("#weather-description");
  descriptionElement.innerHTML = response.data.condition.description;
  let cityElement = document.querySelector("#currentCity");
  cityElement.innerHTML = response.data.city;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let winsSpeedElement = document.querySelector("#windSpeed");
  winsSpeedElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "69fo350cf347a61tc6a94bf3497a464e";
let city = "Pretoria";
let unit = "metric";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
