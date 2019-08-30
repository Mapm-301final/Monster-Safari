'use strict';


// DATABASE_URL=postgres://localhost:5432/monster

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
//Gets current location
app.post('/currentLocation' , curLoc);
//calls Geocode
app.post('/getLocation',searchLatLong);

//get s weather based on results returned by google
// app.get('/weather', (request, response));



//===============================================================================================//
//**************************************     Functions     ************************************//

function curLoc(request,response){
  console.log( request.body.cl , 'curloc request');
}


//Gets location based on search query
function searchLatLong(request,response){
  let query = request.body.search;
  const url =`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${process.env.GEOCODE_API_KEY}`;
  // //using our superagent library to get the proper data format
  return superagent.get(url)
    .then(res =>{
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
