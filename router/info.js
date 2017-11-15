var conn = require('./db');

module.exports = function(app)
{
	app.get('/info',function(req,res){
		res.render('info');
	});
	// app.get('/new',function(req,res){
	// 	res.render('new');
	// });
	// app.get('/list',function(req,res){
	// 	res.render('list');
	// });
}
