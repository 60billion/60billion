var conn = require('./db');

module.exports = function(app)
{
	app.get('/housing',function(req,res){
		res.render('house/housing');
	});
	app.get('/register',function(req,res){
		res.render('register/register');
	});
	app.get('/houseViewTab',function(req,res){
		res.render('house/houseViewTab');
	});
}
