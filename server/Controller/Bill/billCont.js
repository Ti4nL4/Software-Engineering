const bill = require('../../Model/Bill');



module.exports = function (app) {

    app.post('/add-bill' , (req , res)=>{
        
        console.log(req.body);
       bill.addBill(req.body, (result) => {res.send(result)});
    
    })
}