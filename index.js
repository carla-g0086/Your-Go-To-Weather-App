function displayTemp(response) {
let temperatureElement = document.querySelector("#temp");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#city");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let descriptionElement = document.querySelector("#description");
let feelsLikeElement = document.querySelector("#feelsLike");

cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windElement.innerHTML = `${response.data.wind.speed}km/h`;
descriptionElement.innerHTML = response.data.condition.description;
feelsLikeElement.innerHTML = `${response.data.temperature.feels_like}&degC`;
}


  
function search(event) {
  if (event) {
    event.preventDefault();
  }

  let cityInput = event
    ? document.querySelector("#search-input-data").value.trim()
    : "Vienna";
  let h2 = document.querySelector("h2");

  if (cityInput) {
    h2.innerHTML = cityInput;
    let apiKey = "746foa43283b3t834aba30e76024ce8a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemp);
  } else {

    h2.innerHTML = "";
    alert("Please enter a city.");
    
  }

}


let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

search();

let now = new Date();
let h3 = document.querySelector("h3");

let date = now.getDate();
let hours = String(now.getHours()).padStart(2, "0");
let minutes = String(now.getMinutes()).padStart(2, "0");
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

h3.innerHTML = `${day}, ${month} ${date}, ${year} 🔹 ${hours}:${minutes}`;
