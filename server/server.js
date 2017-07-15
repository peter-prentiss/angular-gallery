var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var path = require( 'path' );
var port = process.env.PORT || 5000;

// middleware
app.use( bodyParser.urlencoded( { extended: true } ) );

// static files
app.get('/*', function (req, res) {
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, '/public', file));
});

// spin up server
app.listen(port, function (req, res) {
  console.log('Now listening on:', port);
});
