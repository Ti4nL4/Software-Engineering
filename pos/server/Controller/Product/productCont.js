const product = require('../../Model/Product');

module.exports = function (app) {

    app.get('/' , (req , res)=>{
    
       res.send('hello from simple server :)')
       res.render('addFoodPage.ejs', {});
    })
}