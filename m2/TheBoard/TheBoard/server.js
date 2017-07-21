'use strict';
var http = require('http');

var server = http.createServer(function (request, response) {
    console.log(request.url);
    response.write('this is working');
    response.end();
});

server.listen(3000);