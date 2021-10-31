const city = document.querySelector(".weather span:first-child");
const temp = document.querySelector(".weather span:nth-child(2)");
const weather = document.querySelector(".weather span:nth-child(3)");
const maxTemp = document.querySelector(".weather span:last-child");

const API_KEY = "9ffd1581a6aa8e045e626ae0cbf35da2";

function geoInform(event) {
  const lat = event.coords.latitude;
  const log = event.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `${data.name}`;
      temp.innerText = `${data.main.temp}℃`;
      weather.innerText = `${data.weather[0].main}`;
      maxTemp.innerText = `Temp max : ${data.main.temp_max}℃ / Temp min : ${data.main.temp_min}℃`;
    });
}

function failToInform() {
  console.log("fail");
}

navigator.geolocation.getCurrentPosition(geoInform, failToInform);
