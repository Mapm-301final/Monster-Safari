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
  let map = '';
  response.render('pages/index',{ map: map});
});

//route to get Poke in the vault and display
// app.get('/')

//route to about us page
app.get('/about', (request, response)=>{
  response.render('pages/about');
});

//Gets current location
app.post('/found' , curLoc);
//calls Geocode
app.post('/getLocation',searchLatLong);
app.post('/caught', trap);


//===============================================================================================//
//**************************************     Functions     ************************************//


function pokevault(request, response){
  console.log('Starting Vault Display');
  const SQL= 'SELECT * FROM poke';
}




function trap(request,response){
  console.log(request.body.data, 'send to DB');
  const SQL= `INSERT INTO poke (name, type, icon, img) VALUES ($1,$2,$3,$4)`;
  const values= [request.body.data[0],request.body.data[1],request.body.data[2],request.body.data[3]];
  return client.query(SQL,values)
    .then(res=>{
      console.log(values,'res???????');
      response.render('pages/caught',{pokeTrap: values});
    })
    .catch('oops');
}

//Gets location based on search query
function searchLatLong(request,response){
  let query = request.body.search;
  const url =`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${process.env.GEOCODE_API_KEY}`;
  // //using our superagent library to get the proper data format
  return superagent.get(url)
    .then(res =>{
      let loc = res.body.results[0].geometry.location;
      getRandomPokemon()
        .then(res=>{
          console.log(res, 'hello body');
          let map =`https://maps.googleapis.com/maps/api/staticmap?center=${loc.lat}%2c%20${loc.lng}&zoom=13&size=600x300&markers=icon:${res.icon}%7Csize:large%7Ccolor:red%7C${loc.lat}%2c%20${loc.lng}&maptype=roadmap&key=${process.env.GEOCODE_API_KEY}`;//would like to have a map the pans into the location would have to be a series of maps with at timeout and an incrementer for the zoom
          response.render('pages/found',{map: map, llama: res});
        });
    });
}


function curLoc(request,response){
  let loc = request.body;
  console.log( loc , 'curloc request');
  getRandomPokemon()
    .then(res=>{
      console.log(res, 'hello body');
      let map =`https://maps.googleapis.com/maps/api/staticmap?center=${loc.clat}%2c%20${loc.clng}&zoom=13&size=600x300&markers=icon:${res.icon}%7Csize:large%7Ccolor:red%7C${loc.clat}%2c%20${loc.clng}&maptype=roadmap&key=${process.env.GEOCODE_API_KEY}`;//would like to have a map the pans into the location would have to be a series of maps with at timeout and an incrementer for the zoom
      console.log(map);
      response.render('pages/found',{map: map, llama: res});
    });
}
// POKEMON API CALLS

function getRandomPokemon() {
  var rand = Math.floor(Math.random() * 20) + 1;
  return getPokemon(rand);
}

//gets a random pokemon and then gets the information for that pokemon and runs it through the poke constructor.
function getPokemon(id) {
  let url = `https://pokeapi.co/api/v2/type/${id}/`;
  console.log(url);
  return superagent.get(url)
    .then(res => {
      let pokeArr = res.body.pokemon;
      let randtwo = Math.floor(Math.random()*pokeArr.length);
      console.log(pokeArr[randtwo],'blah blah');
      pokeArr = pokeArr[randtwo];
      return superagent.get(pokeArr.pokemon.url)
        .then(result =>{
          let pokeInfo = result.body;
          return new PokeFound(pokeInfo);
        });

    })
    .catch('oops');
}


//Poke object constructor
function PokeFound(data){
  this.name = data.name;
  this.icon = encodeURI(`https://cdn.filestackcontent.com/${process.env.FILE_STACK_API}/resize=height:64/${data.sprites.front_default}`); //will use for map icon.
  this.type = data.types[0].type.name;
  this.img =data.sprites.front_default;
}

//error handle
app.get('*', (request, response)=>{
  response.render('pages/error');
});
