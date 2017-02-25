var express = require('express');
var routes = require('./router');

var app = express();

app.set('views', 'http://10.47.31.109:10800/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use('/', routes);
app.listen(17888, function() {
	console.log('Listen to port 17888');
})