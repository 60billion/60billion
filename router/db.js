var mysql = require('mysql');
var conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'public'
});
  conn.connect();

  module.exports=conn;
