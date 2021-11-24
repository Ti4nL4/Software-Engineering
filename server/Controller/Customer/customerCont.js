const customer = require('../../Model/Customer');



module.exports = function (app) {

   app.get('/customer',(req , res)=>{
    
      customer.getCustomer((result) => {

           res.send(result);

      });
   
   })
   app.post('/delete-customer', (req,res)=>{
      const idDelete=req.body.id;
      console.log(idDelete);
      customer.deleteCustomer(idDelete , result=>{
         res.send(result)
      })
   })
}