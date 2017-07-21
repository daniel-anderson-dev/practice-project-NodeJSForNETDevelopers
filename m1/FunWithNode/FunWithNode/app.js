'use strict';

console.log('Hello world');

var x = 1;
var y = 25;
console.log(x * y);

var message = require('./message.js');
var consoleMessage = new message();
console.log(consoleMessage.first);

var logger = require('./logger');
logger.log('test message');
