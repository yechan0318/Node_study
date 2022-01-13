const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=ce7655e6d2150b21ad94fd54593038ed&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    } else {
        console.log(response.body.current.weather_descriptions[0] + ". It is currentlt " + response.body.current.temperature + " degress out. It feels like " + response.body.current.feelslike + " degress out.")
    }
    //console.log(response.body.current.weather_descriptions[0] + ". It is currentlt " + response.body.current.temperature + " degress out. It feels like " + response.body.current.feelslike + " degress out.")
})

//Geocoding
//const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZHBja3MxMzUiLCJhIjoiY2twd2FvZzVqMHdwcjJ2bnZzejU3c2EybCJ9.ClAiZzL8tKn8yL9ZK3PKOw'
//request({ url: geocodeURL, json: true }, (error, response) => {
//    const latitude = response.body.features[0].center[1]
//    const longitude = response.body.features[0].center[0]
//    console.log(latitude, longitude)
//})