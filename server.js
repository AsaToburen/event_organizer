var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var db = require('./config/db.js');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// serve static files from public directory

app.use(express.static(__dirname + '/public')); 


require('./app/routes')(app); // configure our routes

app.listen(port, function(){
  console.log('Listening on port ' + port);
});

// expose app           
exports = module.exports = app;
