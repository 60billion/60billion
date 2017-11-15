var express = require('express');
var app = express();
var router = require('./router/main')(app);
var router = require('./router/housing')(app);
var router = require('./router/job')(app);
var router = require('./router/sale')(app);
var router = require('./router/info')(app);
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

var server = app.listen(3000,function(){
	console.log("connected port 3000");
});
