var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.type('application/json');
    res.send({'myname':'wasim'});
});

app.listen(8081);
