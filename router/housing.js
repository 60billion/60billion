var conn = require('./db');

module.exports = function(app)
{
	app.get('/housing',function(req,res){
		res.render('house/housing');
	});
	app.get('/housing/new',function(req,res){
		res.render('house/new');
	});
	// app.get('/list',function(req,res){
	// 	res.render('list');
	// });
}
