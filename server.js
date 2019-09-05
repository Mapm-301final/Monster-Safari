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

// const pg = require('pg');
// const client = new pg.Client(process.env.DATABASE_URL);
// client.connect();
// client.on('error', err=> console.error(err));

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


//===============================================================================================//
//**************************************     Functions     ************************************//


//Gets location based on search query
function searchLatLong(request,response){
  let query = request.body.search;
  const url =`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${process.env.GEOCODE_API_KEY}`;
  // //using our superagent library to get the proper data format
  return superagent.get(url)
    .then(res =>{
      let loc = res.body.results[0].geometry.location;
      getRandomPokemon()
        .then(img=>{
          console.log(img, 'hello img');
          let pokeImg = `https://cdn.filestackcontent.com/${process.env.FILE_STACK_API}/resize=height:64/${img.icon}`;
          let encodedImage = encodeURI(pokeImg);
          return encodedImage;
        })
        .then(res=>{
          console.log(res, 'hello body');
          console.log(loc, 'location');
          let map =`https://maps.googleapis.com/maps/api/staticmap?center=${loc.lat}%2c%20${loc.lng}&zoom=13&size=600x300&markers=icon:${res}%7Csize:large%7Ccolor:red%7C${loc.lat}%2c%20${loc.lng}&maptype=roadmap&key=${process.env.GEOCODE_API_KEY}`;//would like to have a map the pans into the location would have to be a series of maps with at timeout and an incrementer for the zoom
          console.log(map);
          response.render('pages/index',{ map: map});
        });
    });
}


function curLoc(request,response){
  let loc = request.body;
  console.log( loc , 'curloc request');
  getRandomPokemon()
    .then(img=>{
      let pokeImg = `https://cdn.filestackcontent.com/${process.env.FILE_STACK_API}/resize=height:64/${img.icon}`;
      let encodedImage = encodeURI(pokeImg);
      return encodedImage;
    })
    .then(res=>{
      console.log(res, 'hello body');
      let map =`https://maps.googleapis.com/maps/api/staticmap?center=${loc.clat}%2c%20${loc.clng}&zoom=13&size=600x300&markers=icon:${res}%7Csize:large%7Ccolor:red%7C${loc.clat}%2c%20${loc.clng}&maptype=roadmap&key=${process.env.GEOCODE_API_KEY}`;//would like to have a map the pans into the location would have to be a series of maps with at timeout and an incrementer for the zoom
      console.log(map);
      response.render('pages/index',{ map: map});

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
  this.icon = data.sprites.front_default; //will use for map icon.
  this.type = data.types[0].type.name;
}


// // function renderPokemon(getPokemon){
// //   if (weather === sunny) {
// //     // render random from  fire group
// //   }
// //   if (weather === cloudy){
// //     // render random of normal group
//   }
// }

// function getPokemon(name) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
//     .then(function (response) { return response.json(); })
//     .then(function (json) {
//         var pokemon = json;
//         renderPokemon(pokemon);
//     });
// }


// function displayPokemon(pokemon){
//     // loop through and display the pokemon!

// }

//   // render pokemon image
//   // var image = document.createElement('img');
//   // image.src = pokemon.sprites.front_default;
//   // pkHeader.appendChild(image);

//   // // render pokemon type
//   // for (var i = 0; i < pokemon.types.length; i++) {
//   //     var ability = document.createElement("li")
//   //     ability.innerHTML = pokemon.types[i].type.name;
//   //     pkAbilities.appendChild(ability);
//   // }

//   // render pokemon moves
//   for (var i = 0; i < pokemon.pokemon.length; i++) {
//     var move = document.createElement('li');
//     // var spriteFront = $("<img src=" + ['sprites']['front_default'] + ">");
//     // // console.log( pokemon.sprites.front_default);
//     // $("#pokemon_image").append(spriteFront);
//     move.innerHTML = pokemon.pokemon[i].pokemon.name;
//     pkMoves.appendChild(move);
//   }
//   // let ranMove = pokemon.moves[Math.floor(Math.random() * pokemon.moves.length)];
// }

//error handle
app.get('*', (request, response)=>{
  response.render('pages/error');
});
