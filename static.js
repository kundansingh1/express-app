var http = require('http');
var express = require('express');
var port = process.argv[2];
var filePath = process.argv[3];

var app = express();

app.use(express.static(filePath||path.join(__dirname, 'public'))).listen(port);