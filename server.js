'use strict';
/*To run the server install the latest version of nodejs and exicute this server.js file
from the termial using nodejs.  Example: nodejs server.js */

const pg = require('pg');//for connection to PostgreSQL database.
const fs = require('fs');//for communication with File System.
const express = require('express');//web server.
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3005;//listen port for server.
const app = express();//runs the web server application.

const conString = 'postgres://postgres:GiGahurtZ42@localhost:5432/kilovolt2';//credentials psql database.
const client = new pg.Client(conString);//uses credentials to connecto to psql database.
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

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}!`);
});
