'use strict';

var http = require('http');
var express = require('express');
var app = express();

// Setup the view engine.
app.set('view engine', 'jade');

app.get('/', function (request, response) {
    //response.send('this is working');
    response.render('jade/index', { title: 'Express + Jade' });
});

app.get('/api/users', function (request, response) {
    response.set('Content-Type', 'application/json');
    response.send({ name: 'Dan', isValid: true, group: 'Admin' });
});

var server = http.createServer(app);

server.listen(3000);