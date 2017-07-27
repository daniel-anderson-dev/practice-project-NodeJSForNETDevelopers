'use strict';

var http = require('http');
var express = require('express');
var controllers = require('./controllers');

//var ejsLocals = require('ejs-locals');
// Setup the view engine.
//app.set('view engine', 'jade');
//app.engine('ejs', ejsLocals);
//app.set('view engine', 'ejs');

var app = express();
app.set('view engine', 'vash');

app.use(express.static(__dirname + '/public'));

controllers.init(app);

app.get('/api/users', function (request, response) {
    response.set('Content-Type', 'application/json');
    response.send({ name: 'Dan', isValid: true, group: 'Admin' });
});

var server = http.createServer(app);

server.listen(3000);