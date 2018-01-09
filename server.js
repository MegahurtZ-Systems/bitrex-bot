'use strict';
/*To run the server install the latest version of nodejs and exicute this server.js file
from the termial using nodejs.  Example: nodejs server.js */

//const p5 = require('p5');
const pg = require('pg');//for connection to PostgreSQL database.
const fs = require('fs');//for communication with File System.
const express = require('express');//web server.
const bodyParser = require('body-parser');
//const bittrex = require('node-bittrex-api');
const axios = require('axios');
const PORT = process.env.PORT || 3005;//listen port for server.
const app = express();//runs the web server application.

const conString = 'postgres://postgres:GiGahurtZ42@localhost:5432/data';//credentials psql database.
const client = new pg.Client(conString);//uses credentials to connect to psql database.
const API_KEY = '';
const API_SECRET ='';

client.connect();
client.on('error', error => {
  console.error(error);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

//These are routes for requesting HTML resources.
app.get('/new', (request, response) => {
  response.sendFile('new.html', {root: './public'});
});

// bittrex.options({
//   'apikey' : API_KEY,
//   'apisecret' : API_SECRET,
// });

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}!`);
});

// axios.get("https://bittrex.com/api/v1.1/public/getmarkets")
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });

// axios.get('https://bittrex.com/api/v1.1/public/getmarkets')
//   .then(results => console.log(results.data.result[0]))
//   .catch(function (error) {
//     console.log(error);
//   });

// bittrex.getmarketsummaries( function( data, err ) {
//   if (err) {
//     return console.error(err);
//   }
//   for( var i in data.result ) {
//     bittrex.getticker( { market : data.result[i].MarketName }, function( ticker ) {
//       //console.log( ticker );
//     });
//   }
// });
//
// bittrex.getmarkethistory( { market : 'BTC-ETH' }, function( data ) {
//   //console.log( data.result );
// });
//
// bittrex.getorderbook( { market : 'BTC-PIVX', depth : 10, type : 'both' }, function( data ) {
//
//     //data.result.buy.forEach(function(dataset) { console.log(dataset); });
//     //data.result.sell.forEach(function(dataset) { console.log(dataset); });
// });
