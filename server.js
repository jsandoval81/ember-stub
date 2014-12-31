
var express  = require('express'),
    app      = express(),
    someData = require('./someData.json');

//== Set path for static assets
app.use(express.static(__dirname + '/app/assets/build'));

//== Index route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

//== GET /products
app.get('/products', function (req, res) {
    res.json(someData);
});

//== Start server
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Express server listening on port ' + port);
});