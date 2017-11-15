var conn = require('./db');

module.exports = function(app)
{

//데이터 베이스 테스트
	app.get('/',function(req,res){
		var sql = "select * from documents where id =1";

		conn.query(sql,function(err,rows,fields){
			if(err) console.log(err);
			else console.log(rows);
			res.render('main/index');
		});

	});
	//app 연결 테스트
	 app.get('/new/:id',function(req,res){
		 var params = req.params.id;
		res.send(params);
	});

}
