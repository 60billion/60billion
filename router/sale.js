var conn = require('./db');

module.exports = function(app)
{
	app.get('/sale',function(req,res){
		res.render('sale/sale');
	});
	app.get('/regSale',function(req,res){
	 res.render('register/regSale');
 });
	app.get('/saleViewTab',function(req,res){
		res.render('sale/saleViewTab');
	});
	// app.get('/list',function(req,res){
	// 	res.render('list');
	// });
}
