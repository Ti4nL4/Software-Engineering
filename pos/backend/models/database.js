const mysql = require("mysql")

var db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "giang",
    database: "restaurant",
})

db.connect(function(err){
	if(err) console.log("Can't connect mysql")
	else console.log('Successfully')
})

module.exports = db;