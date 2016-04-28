var http = require('http');
var express = require('express');
var port = process.argv[2];

var app = express();
app.get('/home', function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello World!');
}).listen(port);