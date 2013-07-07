var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = new Buffer (256);
var str2 = buf.toString('utc 8', fs.readFileSync('./index.html'));
var str  = 'Hello Jay';

app.get('/', function(request, response) {
  response.send(str2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
