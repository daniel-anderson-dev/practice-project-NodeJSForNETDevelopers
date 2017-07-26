'use strict';

var http = require('http');
var express = require('express');
var app = express();
var ejsLocals = require('ejs-locals');

// Setup the view engine.
//app.set('view engine', 'jade');
app.engine('ejs', ejsLocals);
app.set('view engine', 'ejs');


app.get('/', function (request, response) {
    //response.send('this is working');
    response.render('ejs/index', { title: 'Express + EJS' });
});

app.get('/api/users', function (request, response) {
    response.set('Content-Type', 'application/json');
    response.send({ name: 'Dan', isValid: true, group: 'Admin' });
});

var server = http.createServer(app);

server.listen(3000);