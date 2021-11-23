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
    getRecentBill: function(callback) {

        const sql = `SELECT _User.User_Name,_User.Phone,_User.Address,Bill.Id
        FROM Bill,_User
        WHERE Bill.User_Id = _User.Id AND Role_of_user= "Guest"
        ORDER BY Bill.Buy_Time
        DESC LIMIT 6
        `;

        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    },
    getCustomer: function(callback) {

        const sql = `SELECT *
        FROM _User
        WHERE Role_of_user= "Guest"
        `;
        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    },
    deleteCustomer: function(id,callback){
        const sql = `DELETE FROM _User WHERE id = ${id}`;
        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    },

};