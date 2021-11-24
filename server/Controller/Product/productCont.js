const product = require('../../Model/Product');



module.exports = function (app) {

    app.get('/add-product' , (req , res)=>{
    
       
       product.getTypes((result) => {
            console.log(result);
        res.render('addFoodPage.ejs', {foodTypeList: result});
       });
    }),

    app.post('/add-product' , (req , res)=>{

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
    app.post('/delete-product', (req,res)=>{
       const idDelete=req.body.id;
       console.log(idDelete);
       product.delete(idDelete , result=>{
          res.send(result)
       })
    })
    app.get('/get-product-by-type', (req,res)=>{
       product.getProductByType(req.body.product_type,result =>{
         res.send(result)
       })
    })
    app.post('/update-product',(req,res)=>{
      const product_name = req.body.data.product_name;
      const product_type = req.body.data.product_type
      const fund = req.body.data.fund;
      const price = req.body.data.price;
      const instock = req.body.data.instock;
      const product_description = req.body.data.product_description;
      const image = req.body.data.image;
      const id = req.body.id;

      const data = {
         product_name,
         product_type,
         fund,
         price,
         instock,
         product_description,
         image,
         id
      };
      console.log(data);
       product.update(data, result => {

         res.send(result);
      })
    })
    
   
}