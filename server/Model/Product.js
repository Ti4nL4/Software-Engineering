const connector = require('./DatabaseConnector');
const query = require('./utils/query');
const tableName = 'product';

module.exports = {

    get: function(callback) {

        const sql = `SELECT * FROM ${tableName}`;

        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    },

    getById: function(id, callback) {

        const sql = `SELECT * FROM ${tableName} where id = ${id}`;
        
    },
    getTypes: function(callback) {

        const sql = `SELECT DISTINCT Product_Type FROM ${tableName}`;
        
        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
        
    },
    add: function(data, callback) {

        const sql = `INSERT INTO ${tableName}
        (Product_Name, Product_Type, Price, Fund, Product_Description, Instock, Image)
        VALUES
        ("${data.product_name}", "${data.product_type}", 
        "${data.price}", "${data.fund}", "${data.product_description}", "${data.instock}", "${data.image}")
        `;

        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    }
};