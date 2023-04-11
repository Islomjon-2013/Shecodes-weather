let now = new Date();
let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = week[now.getDay()];
let weekend = document.querySelector(".week");
weekend.innerHTML = `${day}`;
let hours = now.getHours();
let minute = now.getMinutes();
console.log(minute);
console.log(hours);
let hour = document.querySelector(".hour");
console.log(hour);
let fullHours = (hour.innerHTML = `${hours}:${minute}`);

let form = document.querySelector(".form");
function sendData(event) {
  event.preventDefault();
  let search = document.querySelector("#search");
  console.log(search.value);
  let h1 = document.querySelector(".city");
  console.log((h1.innerHTML = `${search.value}`));
  let temp = document.querySelector(".temp");
  let result = (temp.innerHTML = `${temprature}`);
}
form.addEventListener("submit", sendData);

function showPosition(response) {
  let temprature = Math.round(response.data.main.temp);
  console.log(temprature);
}
function retrievePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = "f016b370dc293c96e0b221f057a9e8ee";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang={lang}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showPosition);
}

navigator.geolocation.getCurrentPosition(retrievePosition);
