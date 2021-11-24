const bill = require('../../Model/Bill');



module.exports = function (app) {

    app.post('/add-bill' , (req , res)=>{
        
        
       bill.addBill(req.body, (result) => {res.send(result)});
    
    })
    ,
    app.get('/recent-bill' , (req , res)=>{
    
        product.getRecentBill((result) => {
  
             res.send(result);
  
        });
     
     })
}