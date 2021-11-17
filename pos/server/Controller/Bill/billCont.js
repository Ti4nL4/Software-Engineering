const bill = require('../../Model/Bill');



module.exports = function (app) {

    app.post('/add-bill' , (req , res)=>{
        
        
       bill.addBill(req.body, (result) => {res.send(result)});
    
    })
}