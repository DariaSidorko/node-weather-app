
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

//const weather_icon = document.querySelector('#weather_icon')
const icon = document.createElement("img");
icon.className = "icon";
//const weather_icon = document.querySelector('#weather_icon')

//'https://media.geeksforgeeks.org/wp-content/uploads/20190529122826/bs11.png';

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;

  fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
        console.log(data.error);
      } else {
        console.log(data.forecast.weather_icon);
        messageOne.textContent = data.location;
        //messageTwo.textContent = data.forecast.message;
        
        icon.src = data.forecast.weather_icon;
        document.getElementById("weather_icon").appendChild(icon);

        temp.textContent = data.forecast.temp;
        //feelslike.textContent = data.feelslike;
        humidity.textContent = "Humidity: " + data.forecast.humidity + '%';
        wind_speed.textContent = "Wind speed: " + data.forecast.wind_speed + ' mph';
        precip.textContent = "Precipitation: " + data.forecast.precip + '%';
        //timezone.textContent = data.forecast.timezone;
        console.log(data.forecast);
      }
    })
  })

  console.log(location)
})