var mysql = require('mysql');
var conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'1113',
  database:'public'
});
  conn.connect();

  module.exports=conn;
