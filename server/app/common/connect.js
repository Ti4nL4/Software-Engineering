var mysql = require('mysql');


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'giang',
	database: 'restaurant'
});

connection.connect(function(err){
	if(err) console.log("Can't connect mysql")
	else console.log('Successfully')
})

module.exports = connection;