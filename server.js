/*
 * Here, you should write a simple server to serve files statically.
 */

var path = require('path');

var staticDir = path.join(__dirname, 'public');
var indexFilename = 'index.html';
var notFoundFilename = '404.html';
var port = process.env.PORT || 3000;
