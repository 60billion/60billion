var conn = require('./db');

module.exports = function(app)
{
	app.get('/job',function(req,res){
		res.render('/main/index');
	});
	// app.get('/new',function(req,res){
	// 	res.render('new');
	// });
	// app.get('/list',function(req,res){
	// 	res.render('list');
	// });
}
