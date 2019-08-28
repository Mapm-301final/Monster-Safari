'use strict';

//Express
const express = require('express');
const app = express();

//cors
const cors = require('cors');
app.use(cors());

//superagent
const superagent = require('superagent');
require('dotenv').config();

//=================Postgres Database===============
// const pg = require('pg');
// const client = new pg.Client(process.env.DATABASE_URL);
// client.connect();
// client.on('error', err=> console.error(err));

//setting up ejs
app.set('view engine', 'ejs');
app.use(express.static('./public/../'));

app.use(express.urlencoded({extended:true}));

//PORT
const PORT = process.env.PORT || 3000;

//tells our server to start listening on the port
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

//method-override
// const methodOverride = require('method-overrride');

//initial index page
app.get('/', (request, response)=>{
  response.render('pages/index');
});

//error handle
app.get('*', (request, response)=>{
  response.render('pages/error');
});

// POKEMON API CALLS


// WEATHER API CALLS

app.get('/weather', (request, response) => {
  response.send(searchWeather(request));
});

function searchWeather(request){
  const lat = request.lat;
  const long = request.long;
  const url = `https://api.weather.gov/points/${lat},${long}`;
  return superagent.get(url)
    .then(res => {
      const url = res.body.properties.forecastGridData;
      return superagent.get(url);
    }).then(res => {
      return new Weather(res.body.properties);
    });
}

function Weather(data){
  this.elevation = data.elevation.value;
  this.temperature = data.temperature.values[0].value;
  this.weather = data.weather.values[1].value[0].weather;
}
