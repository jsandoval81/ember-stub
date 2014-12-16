
var express = require('express'),
    app     = express();

//== Set path for static assets
app.use(express.static(__dirname + '/app/assets/build'));

//== Load index page on index route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

//== Start server
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Express server listening on port ' + port);
});