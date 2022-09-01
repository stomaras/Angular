const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create a constant for the port number that our Express Server will run on the Const port is equal to 
// 3000
const PORT = 3000;

// create an instance of express
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){
    res.send('Hello From Server');
})

app.listen(PORT, function(){
    console.log("Server running on localhost:" + PORT );
});
/*
request body contains the user data that was submitted by the angular application and then we send a response 
*/
app.post('/enroll',function(req,res){
    console.log(req.body);
    res.status(401).send({"message":"Data Received"});
});
