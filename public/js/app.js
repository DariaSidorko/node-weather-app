
const weatherForm = document.querySelector('form')
const search = document.querySelector('input');

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const temp = document.querySelector('#temp')
const feelslike = document.querySelector('#feelslike')
const humidity = document.querySelector('#humidity')
const wind_speed = document.querySelector('#wind_speed')
const precip = document.querySelector('#precip')
const timezone = document.querySelector('#timesone')

const icon = document.createElement("img");
icon.className = "icon";

function fercher(location) {
fetch('/weather?address=' + location).then((response) => {
  response.json().then((data) => {
    if (data.error) {
      messageOne.textContent = data.error;
      document.getElementById("message-1").style.color = "red";
    } else {
      messageOne.textContent = data.location; 
      document.getElementById("message-1").style.color = "#808080";   
      icon.src = data.forecast.weather_icon;
      document.getElementById("weather_icon").appendChild(icon);
      temp.textContent = data.forecast.temp;
      humidity.textContent = data.forecast.humidity + '%';
      wind_speed.textContent = data.forecast.wind_speed + ' mph';
      precip.textContent = data.forecast.precip + '%';

    }
  })
})
}


fercher('Seattle');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;
  this.fercher(location);
})



