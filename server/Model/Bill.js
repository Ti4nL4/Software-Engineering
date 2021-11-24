const query = require('./utils/query');
const tableName = 'bill';

module.exports = {

    addBill: async (data, callback) => {

        const conn = await query.getConnection();

        // start a transaction
        conn.beginTransaction(async err => {

            try {
                
                const insertBillsql = `INSERT INTO ${tableName}(Buy_Time, User_Id) VALUES 
                ("2021/02/02", "${data.User_Id}")`;
                
                const addBillResult = await query.transQuery(conn, insertBillsql);
                
                const billID = addBillResult.insertId;
                
                for (let item of data.items) {
                   
                    let insertCartSql = `INSERT INTO CART VALUES (${billID}, ${item.Id}, ${item.amount})`;
                    
                    await query.transQuery(conn, insertCartSql);
                }

                await conn.commit();
                callback({isSuccess: true});

            } catch (error) {
            
                await conn.rollback();
                callback({isSuccess: false, error});
            }

        });
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
    getRecentBillWithTotalPrice: function(callback) {

        const sql = `SELECT _User.User_Name,_User.Address,DATE_FORMAT(Bill.Buy_Time, "%M %d %Y") AS Date,SUM(Cart.Quantity * Product.Price) AS Total_Price
        FROM Bill,_User,Cart,Product
        WHERE Bill.User_Id = _User.Id AND Role_of_user= "Guest" AND Cart.Bill_id = Bill.Id AND Product.Id = Cart.Product_Id AND YEAR(Bill.Buy_Time) = YEAR(CURDATE()) AND MONTH(Bill.Buy_Time) = MONTH(CURDATE())
        GROUP BY Bill.Id
        ORDER BY SUM(Cart.Quantity * Product.Price) DESC LIMIT 6
        `;

        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    },
    getTotalBill: function (callback){
        const sql = `SELECT COUNT(Id) AS Num FROM Bill`;
        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    },
    getProfit: function (callback){
        const sql = `SELECT DATE_FORMAT(DATE(Buy_Time), "%M %d %Y") as Date, DAYNAME(Buy_Time) as 'Day_Name', SUM((Price+Fund*(-1))*Quantity) As Profit
        FROM Bill,Product,Cart
        WHERE DATE(Buy_Time)>= DATE(NOW()) - INTERVAL 10 DAY AND MONTH(Buy_Time) = MONTH(CURDATE()) AND YEAR(Buy_Time) = YEAR(CURDATE()) 
            AND Bill.Id = Cart.Bill_Id AND Product_Id=Product.Id
        GROUP BY DAYNAME(Buy_Time) ORDER BY (Buy_Time)`;
        query.awaitQuery(sql).then(result => callback(result)).catch(error => callback(error));
    }
};