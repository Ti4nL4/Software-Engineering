const query = require('./utils/query');

module.exports = {

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
    addCustomer: function(data, callback) {
        const sql = `INSERT INTO _User
        ( Role_of_user, User_Name, User_Password, Email, Phone, Address)
        VALUES
        ( "${data.Role_of_user}","${data.User_Name}", "${data.User_Password}", "${data.Email}", "${data.Phone}", "${data.Address}")
        `;
        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    },
    getTotalCustomer: function (callback){
        const sql = `SELECT COUNT(Id) AS Num FROM _User WHERE Role_of_user='Guest' `;
        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    }
};