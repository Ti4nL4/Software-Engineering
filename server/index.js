var express = require('express');

var app = express();
/** cau hinh body-parser */
// //lay du tu middleware vao body khi xai post
// app.use(
// 	express.urlencoded({
// 	  extended: true,
// 	}),
//   ); //tu form
// app.use(express.json()); //du lieu tu js
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// require('./app/routes/user.router')(app);
require('./app/routes/report.router')(app);
app.listen(9000, function(){
	console.log("Server listening on http://localhost:9000");
});