const connector = require('./DatabaseConnector');
const tableName = 'product';

module.exports = {

    get: function(callback) {

        const sql = `SELECT * FROM ${tableName}`;

        connector.query(sql, function(err, result) {

            if (err) callback(err);
            else 
                callback(result);
        });
    },

    getById: function(id, callback) {

        const sql = `SELECT * FROM ${tableName} where id = ${id}`;
        
    },
    getTypes: function(callback) {

        const sql = `SELECT DISTINCT Product_Type FROM ${tableName}`;
        
        connector.query(sql, function(err, result) {

            
            if (err) callback([]);
            else 
                callback(result);
        });
        
    },
    add: function(data, callback) {

        const sql = `INSERT INTO ${tableName}
        (Product_Name, Product_Type, Price, Fund, Product_Description, Instock, Image)
        VALUES
        ("${data.product_name}", "${data.product_type}", 
        "${data.price}", "${data.fund}", "${data.product_description}", "${data.instock}", "${data.image}")
        `;

        connector.query(sql, function(err, result) {

            if (err) callback([]);
            else 
                callback(result);
        });

    }
};