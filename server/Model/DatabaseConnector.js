const mysql = require("mysql")
require("dotenv").config()

module.exports = mysql.createPool({

    password: 'Tienle5ml',
    host: 'localhost',
    user: 'root',
    database: 'restaurant'
});