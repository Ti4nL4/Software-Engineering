const express = require('express');
// var cors = require('cors')
const app = express();
const productCont = require('./Controller/Product/productCont');
const billCont = require('./Controller/Bill/billCont');

// app.use(cors);

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static('./view/public'));

// add route
productCont(app);
billCont(app);

// change CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});


// app.set('view engine', 'ejs');

// app.get('/' , (req , res)=>{

//     console.log('123');
//     res.render('home.ejs', {})
 
// });

// app.get('/home' , (req , res)=>{

//     console.log('123');
//     res.render('home.ejs', {})
 
// });


app.listen(3000, () => {

    console.log('Server!');

});