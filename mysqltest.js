var mysql=require('mysql');
var connection=mysql.createConnection({
	host:	'localhost',
	user:	'friend',
	password:'Woshipengyou',
	database:'testdb'
});

connection.connect();

connection.query('select * from Tshirt', function(err, rows, fields){
	if (err) throw err;
	console.log(rows);
	console.log(fields);
});

connection.end();
