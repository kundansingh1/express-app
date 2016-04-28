var express = require('express');
var bodyParser = require('body-parser');

var port = process.argv[2];
var filePath = process.argv[3];
var app = express();

app.use(require('stylus').middleware(filePath));
app.use(express.static(filePath)).listen(port);
