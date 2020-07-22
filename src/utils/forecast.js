

const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=5dd219bcd6abc330f37a076117e66b3c&query=' + latitude + ',' + longitude + '&units=f';
    request({ url, json: true }, (error, {body}) => {
    //console.log(response.body.current)
    if (error) {
      callback('Unable to connect to weather service!')
    } else if (body.error) {
      callback("Unable to find location.")
    } else {
      callback(undefined, {
        message: body.current.weather_descriptions[0] + ". It's currently " + body.current.temperature + " degrees out.",
        description: body.current.weather_descriptions[0],
        temp: body.current.temperature,
        feelslike: body.current.feelslike
      })
    }
  })
}

module.exports = forecast;