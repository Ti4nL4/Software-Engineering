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
    },
    delete: function(id,callback){
        const sql = `DELETE FROM ${tableName} WHERE id = ${id}`;
        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    },
    getProductByType: function(type,callback){
        const sql = `SELECT  * FROM ${tableName} WHERE Product_Type = ${type}`;
        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    },
    update: function(data, callback) {

        const sql = `UPDATE ${tableName}
        SET 
        Product_Name = "${data.product_name}",Product_Type="${data.product_type}", Price="${data.price}", Fund="${data.fund}",
         Product_Description="${data.product_description}", Instock="${data.instock}", Image="${data.image}"
       WHERE Id= ${data.id}
        `;

        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    },
    getTotalProduct: function (callback){
        const sql = `SELECT COUNT(Id) AS Num FROM Product`;
        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    },
    getTotalProductByType: function (callback){
        const sql = `SELECT Product_Type,COUNT(*) AS Num FROM Product GROUP BY Product_Type`;
        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    },
};