var express = require('express');

const SERVER_PORT = process.env.PORT || 8080;
const SERVER_HOST = process.env.HOST || 'localhost';

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(SERVER_PORT, SERVER_HOST, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

console.log(process.env);
