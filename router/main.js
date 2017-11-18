var conn = require('./db');

module.exports = function(app)
{

//데이터 베이스 테스트
	app.get('/',function(req,res){
			res.render('main/index');
	});
	//app 연결 테스트
	app.get('/recomend',function(req,res){
		res.render('main/recomend');
	});

	app.get('/login',function(req,res){
		res.render('profile/login');
	});

	app.get('/profile',function(req,res){
		res.render('profile/profile')
	});
	app.get('/savedHouse',function(req,res){
		res.render('profile/savedHouse')
	});
	app.get('/savedJob',function(req,res){
		res.render('profile/savedJob')
	});
	app.get('/savedSale',function(req,res){
		res.render('profile/savedSale')
	});
	app.get('/savedInfo',function(req,res){
		res.render('profile/savedInfo')
	});
	app.get('/chat',function(req,res){
		res.render('profile/chat')
	});

	app.get('/test',function(req,res){
		res.render('main/test');
	});


}
