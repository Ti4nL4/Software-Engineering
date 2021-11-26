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
   app.post('/add-customer',  (req , res)=>{

      const Role_of_user = 'Guest';
      const User_Name = req.body.User_Name
      const User_Password = req.body.User_Password;
      const Email = req.body.Email;
      const Phone = req.body.Phone;
      const Address = req.body.Address;

      const data = {
         Role_of_user,
         User_Name,
         User_Password,
         Email,
         Phone,
         Address,
      };
    console.log(data);
      customer.addCustomer(data, result => {
         res.send(result);
      })
    
    })
   app.get('/num-customer',(req , res)=>{
      customer.getTotalCustomer((result) => {
           res.send(result);
      });
   })
}