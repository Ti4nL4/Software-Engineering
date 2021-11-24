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
    }
};