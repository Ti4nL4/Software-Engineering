const query = require('./utils/query');
const tableName = 'bill';


const getToDay = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;

    return today;
}


module.exports = {

    addBill: async (data, callback) => {

        const conn = await query.getConnection();

        // start a transaction
        conn.beginTransaction(async err => {

            try {
                
                const insertBillsql = `INSERT INTO ${tableName}(Buy_Time, User_Id) VALUES 
                ("${getToDay()}", "${data.User_Id}")`;
                console.log(insertBillsql);
                const addBillResult = await query.transQuery(conn, insertBillsql);
                
                const billID = addBillResult.insertId;
                
                for (let item of data.items) {
                   
                    let insertCartSql = `INSERT INTO CART VALUES (${billID}, ${item.Id}, ${item.amount})`;
                    let descProductSql = `UPDATE product set Instock = Instock - ${item.amount} where id = ${item.Id}`;
                    await query.transQuery(conn, descProductSql);
                    await query.transQuery(conn, insertCartSql);
                }

                await conn.commit();
                callback({isSuccess: true});

            } catch (error) {
                
                console.log(error);
                await conn.rollback();
                callback({isSuccess: false, error});
            }

        });
    }
};