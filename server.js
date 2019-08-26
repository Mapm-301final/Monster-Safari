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

