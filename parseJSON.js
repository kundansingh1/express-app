var express = require('express');
var fs = require('fs');
var port = process.argv[2];
var fileName = process.argv[3];

var app = express();
var fileData = fs.readFileSync(fileName, 'utf8');
fileData = JSON.parse(fileData);

app.get('/books',function(req, res) {
    res.json(fileData);
}).listen(port);