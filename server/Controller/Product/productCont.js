const product = require('../../Model/Product');



module.exports = function (app) {

    app.get('/add-product' , (req , res)=>{
    
       
       product.getTypes((result) => {
            console.log(result);
        res.render('addFoodPage.ejs', {foodTypeList: result});
       });
    }),
    app.post('/add-product' , (req , res)=>{
      console.log(req.body);
      const product_name = req.body.product_name;
      const product_type = req.body.product_type
      const fund = req.body.fund;
      const price = req.body.price;
      const instock = req.body.instock;
      const product_description = req.body.product_description;
      const image = req.body.image;

      const data = {
         product_name,
         product_type,
         fund,
         price,
         instock,
         product_description,
         image
      };
    
      product.add(data, result => {

         res.send(result);
      })
    
    }),
    app.get('/product' , (req , res)=>{
    
       product.get((result) => {

            res.send(result);

       });
    
    })
}