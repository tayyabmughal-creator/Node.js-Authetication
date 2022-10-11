const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
//Connect to DB 
mongoose.connect('localhost:27017', { useNewUrlParser:true } , ()=>{
    console.log('connected to db!')
});
//Import Routes
const authRoute =  require('./routes/auth');
//Route Middleware
app.use('/api/user' , authRoute);
app.listen(27017, () => console.log('Server up and running'));
 