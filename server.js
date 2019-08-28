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
  getLocation();
  response.render('pages/index');
});

// app.get('/weather', (request, response));



//===============================================================================================//
//**************************************     Functions     ************************************//
// locatiton= Geolocation.getCurrentPosition()
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

let showPosition=(position)=>{
  console.log('Latitude: '+ position.coords.latitude + 
  '  Longitude: ' + position.coords.longitude);
};


// getWeather(request, response)
// request.send(res=>       )

//error handle
app.get('*', (request, response)=>{
  response.render('pages/error');
});
