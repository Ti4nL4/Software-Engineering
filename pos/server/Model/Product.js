const connector = require('./DatabaseConnector');
const tableName = 'product';

module.exports = {

    get: function(callback) {

        const sql = `SELECT * FROM ${tableName}`;

        connector.query(sql, function(err, result) {

            if (err) callback([]);
            else 
                callback(result);
        });
    },

    getById: function(id, callback) {

        const sql = `SELECT * FROM ${tableName} where id = ${id}`;

        connector.query(sql, function(err, result) {

            if (err)
                callback([]);
            else
                callback(result);
        })
    }

};