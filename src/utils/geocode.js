
const request = require('postman-request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGFuZWNoa2EiLCJhIjoiY2tjZ3lyeTJ0MHRzejJwbWd0a2RscGozMCJ9.bURkox-3YNq1fR950UVNww&limit=1'
  request({ url, json: true }, (error, {body}) => {
    //console.log('RES ', response);
    //console.log(response.body.features)
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search!", undefined)
    } else {
    callback(undefined, {
      latitude: body.features[0].center[1],
      longitude: body.features[0].center[0],
      location: body.features[0].place_name
    });
    }
  })
}

module.exports = geocode;