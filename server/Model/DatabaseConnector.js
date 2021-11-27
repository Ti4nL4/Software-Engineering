const mysql = require("mysql")
require("dotenv").config()

module.exports = mysql.createPool({

    password: 'giang',
    host: 'localhost',
    user: 'root',
    database: 'restaurant'
});