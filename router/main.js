var conn = require('./db');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: 'public/uploads/' })


module.exports = function(app)
{
	app.use(bodyParser.urlencoded({extended:false}));
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




	// 셀렉트 테스트
	app.get('/test',function(req,res){
		res.render('main/test');
	})
	app.post('/test',function(req,res){
		var query = req.body.selectpicker;
		console.log(query.text);
		res.send(query);
	})
	//select test (change second selector)
	app.get('/test1',function(req,res){
		res.render('main/test1');
	})
	app.post('/test1',function(req,res){
		var k = req.body.select2;
		res.send(k);
		console.log(k);
	})

	app.get('/test2',function(req,res){
		res.render('main/test2');
	})
	app.post('/test2',upload.single('user'),function(req,res,next){
		var file = req.file
		console.log(file);
		res.send(file);
	})



}
