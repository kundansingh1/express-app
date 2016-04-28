var express = require('express');
var app = express();
var port = process.argv[2];

app.get('/search', function(req, res) {
    res.writeHead(200, {'Content-Type':'json/application'});
    res.end(JSON.stringify(req.query));
});
app.listen(port);