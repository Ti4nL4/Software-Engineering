const query = require('./utils/query');
const tableName = 'bill';

module.exports = {

    addBill: async (data, callback) => {

        const conn = await query.getConnection();
        conn.beginTransaction(async err => {

            try {
                
                const insertBillsql = `INSERT INTO ${tableName}(Buy_Time, User_Id) VALUES 
                ("2021/02/02", "${data.User_Id}")`;
                
                const addBillResult = await query.transQuery(conn, insertBillsql);
                
                const billID = addBillResult.insertId;
                
                for (let item of data.items) {
                   
                    let insertCartSql = `INSERT INTO CART VALUES (${billID}, ${item.id}, ${item.amount})`;
                    
                    await query.transQuery(conn, insertCartSql);
                }

                await conn.commit();
                callback(true);

            } catch (error) {
            
                await conn.rollback();
                callback(error);
            }

        });
    }
};