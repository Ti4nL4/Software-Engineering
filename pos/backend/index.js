const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const user = require('./routes/user_router')

app.use("/api", user);

app.listen(3001, () =>{
	console.log("Server listening on http://localhost:3001");
}); 