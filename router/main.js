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
	app.get('/test',function(req,res){
		res.render('main/test');
	});

}
