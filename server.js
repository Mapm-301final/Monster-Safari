'use strict';


// DATABASE_URL=postgres://localhost:5432/monster
//PORT
const PORT = process.env.PORT || 3000;

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
// DATABASE_URL=postgres://localhost:5432/monster

const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err=> console.error(err));

//setting up ejs
app.set('view engine', 'ejs');
app.use(express.static('./public/../'));
app.use(express.urlencoded({extended:true}));

//tells our server to start listening on the port
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

//method-override
// const methodOverride = require('method-overrride');

//initial index page
app.get('/', (request, response)=>{
  let map = 'http://www.pngmart.com/files/2/Pikachu-PNG-Free-Download.png';
  response.render('pages/index',{ map: map});
});

//Gets current location
app.post('/currentLocation' , curLoc);
//calls Geocode
app.post('/getLocation',searchLatLong);

//get weather based on results returned by google
// app.get('/weather', (request, response));

//===============================================================================================//
//**************************************     Functions     ************************************//

// function getMap(lat,lng){
//   let map =`https://maps.googleapis.com/maps/api/staticmap?center=${lat}%2c%20${lng}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.GEOCODE_API_KEY}`;
//   return map;
// }

function curLoc(request,response){
  let loc = request.body;
  console.log( loc , 'curloc request');
  let map =`https://maps.googleapis.com/maps/api/staticmap?center=${loc.clat}%2c%20${loc.clng}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.GEOCODE_API_KEY}`;
  console.log('map rendered');
  response.render('pages/index',{ map: map})
    .then(
    // callweather(loc.clat, loc.clng)
    );
}






//Gets location based on search query
function searchLatLong(request,response){
  let query = request.body.search;
  const url =`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${process.env.GEOCODE_API_KEY}`;
  // //using our superagent library to get the proper data format
  return superagent.get(url)
    .then(res =>{
      let loc = res.body.results[0].geometry.location
      let map =`https://maps.googleapis.com/maps/api/staticmap?center=${loc.lat}%2c%20${loc.lng}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.GEOCODE_API_KEY}`;
      response.render('pages/index',{ map: map});
      console.log('Results of search to lat long', res.body.results[0].geometry.location);//Needs to be the call to the weather API
    });

  // //then when we got the data from superagent create a new City object with the query (location name) and data (res.body.results[0]);
  // .then(res => {
  // res.render('/');
  //     // console.log(res);
  //     // return res.body.results[0].data.geometry.location.lat,res.body.results[0].data.geometry.location.long ;
  //   });

}

// getWeather(request, response)
// request.send(res=>       )

//error handle
app.get('*', (request, response)=>{
  response.render('pages/error');
});

// POKEMON API CALLS


// WEATHER API CALLS

app.get('/weather', (request, response) => {
  const lat = 47.618333199999995;
  const long = -122.3513311;
  const url = `https://api.weather.gov/points/${lat},${long}`;
  console.log(url);
  return superagent.get(url).set({'User-Agent': 'ua'})
    .then(res => {
      console.log(res);
      const url = res.body.properties.forecastGridData;
      return superagent.get(url);
    }).then(res => {
      response.send(new Weather(res.body.properties));
    }).catch(console.error);
});

function Weather(data){
  this.elevation = data.elevation.value;
  this.temperature = data.temperature.values[0].value;
  this.weather = data.weather.values[1].value[0].weather;
}
