const morgan = require('morgan');
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));



// var cors = require('cors');
const productCont = require('./Controller/Product/productCont');
const billCont = require('./Controller/Bill/billCont');
const customerCont = require('./Controller/Customer/customerCont');
// app.use(cors);

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors());
// app.use(express.static('./view/public'));



// change CORS
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     next();
// });

// add route
productCont(app);
billCont(app);
customerCont(app);

const user = require('./app/routes/user_router')
app.use("/api", user);


require('./app/routes/report.router')(app);
require('./app/routes/login.router')(app);
app.listen(9001, function(){
	console.log("Server listening on http://localhost:9001");
});  