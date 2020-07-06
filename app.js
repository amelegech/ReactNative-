const express = require('express');
const mongoose = require('mongoose')
const app = express();
const dotenv= require('dotenv');
const newUserAuth = require('./routes/myAuth');

// to access all the thing in the dotenv file
dotenv.config();


//connect to mongoDB
mongoose.connect( process.env.DB_CONNECT,
{ useNewUrlParser: true ,  useUnifiedTopology: true },
()=>{console.log('MyMongoDB connected')
})


// middleware
app.use('/api/user', newUserAuth);

// connect to server
const port = 5000;
app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})