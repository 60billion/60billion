var conn = require('./db');

module.exports = function(app)
{
	app.get('/housing',function(req,res){
		res.render('house/housing');
	});
}
