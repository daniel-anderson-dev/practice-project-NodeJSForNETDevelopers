'use strict';

var http = require('http');
var express = require('express');
var app = express();

app.get('/', function (request, response) {
    response.send('this is working');
});

var server = http.createServer(app);

server.listen(3000);