'use strict';
/*To run the server install the latest version of nodejs and exicute this server.js file
from the termial using nodejs.  Example: nodejs server.js */

//const p5 = require('p5');
// const pg = require('pg');//for connection to PostgreSQL database.
const fs = require('fs');//for communication with File System.
const express = require('express');//web server.
const bodyParser = require('body-parser');
const cors = require('cors');
//const bittrex = require('node-bittrex-api');
const axios = require('axios');
const superAgent = require('superagent');
const PORT = process.env.PORT || 3005;//listen port for server.
const app = express();//runs the web server application.

// const conString = 'postgres://postgres:GiGahurtZ42@localhost:5432/data';//credentials psql database.
// const client = new pg.Client(conString);//uses credentials to connect to psql database.
const API_KEY = '';
const API_SECRET ='';

// client.connect();
// client.on('error', error => {
//   console.error(error);
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
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

const bittrexPublicAPI = 'https://bittrex.com/api/v1.1/public/';
var markets = [];

// axios.get(bittrexPublicAPI + 'getmarkets')
//   .then(results => markets.push(results.data.result[0])
// )
//   .catch(function (error) {
//     console.log(error);
// });

app.get('/api/bittrex/markets', (req, res) => {
  let url_markets = `${bittrexPublicAPI}getmarkets`;
  superAgent.get(url_markets)
    .then(data => {
      let arrMarkets = data.body.result;
      res.send(arrMarkets);
    }).catch(err => console.error(err));
});

app.get('/api/bittrex/currencies', (req, res) => {
  let url_currencies = `${bittrexPublicAPI}getcurrencies`;
  superAgent.get(url_currencies)
    .then(data => {
      let arrCurrencies = data.body.result;
      res.send(arrCurrencies);
    }).catch(err => console.error(err));
});

var market = 'btc-ltc';

app.get('/api/bittrex/ticker', (req, res) => {
  let url_ticker = `${bittrexPublicAPI}getticker?market=${market}`;
  superAgent.get(url_ticker)
    .then(data => {
      let arrTicker = data.body.result;
      res.send(arrTicker);
    }).catch(err => console.error(err));
});

app.get('/api/bittrex/marketsummaries', (req, res) => {
  let url_getmarketsummaries = `${bittrexPublicAPI}getmarketsummaries`;
  superAgent.get(url_getmarketsummaries)
    .then(data => {
      let arrGetmarketsummaries = data.body.result;
      res.send(arrGetmarketsummaries);
    }).catch(err => console.error(err));
});

app.get('/api/bittrex/marketsummary', (req, res) => {
  let url_getmarketsummary = `${bittrexPublicAPI}getmarketsummary?market=${market}`;
  superAgent.get(url_getmarketsummary)
    .then(data => {
      let arrGetmarketsummary = data.body.result;
      res.send(arrGetmarketsummary);
    }).catch(err => console.error(err));
});

var type = 'both'; // buy, sell, both

app.get('/api/bittrex/orderbook', (req, res) => {
  let url_getorderbook = `${bittrexPublicAPI}getorderbook?market=${market}&type=${type}`;
  superAgent.get(url_getorderbook)
    .then(data => {
      let arrGetorderbook = data.body.result;
      res.send(arrGetorderbook);
    }).catch(err => console.error(err));
});

app.get('/api/bittrex/markethistory', (req, res) => {
  let url_getmarkethistory = `${bittrexPublicAPI}getmarkethistory?market=${market}`;
  superAgent.get(url_getmarkethistory)
    .then(data => {
      let arrGetmarkethistory = data.body.result;
      res.send(arrGetmarkethistory);
    }).catch(err => console.error(err));
});

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
