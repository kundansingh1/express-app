var express = require('express');
var crypto = require('crypto');
var port = process.argv[2];
var app = express();

app.put('/message/:ID', function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(crypto.createHash('sha1').update(new Date().toString() + req.params.ID).digest('hex'));
});
app.listen(port);