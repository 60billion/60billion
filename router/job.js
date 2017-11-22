var conn = require('./db');

module.exports = function(app)
{
	app.get('/job',function(req,res){
	 	res.render('job/job');
	 });
	app.get('/regJob',function(req,res){
		res.render('register/regjob');
 	});
	app.get('/jobViewTab',function(req,res){
		res.render('job/jobViewTab');
	});
}
