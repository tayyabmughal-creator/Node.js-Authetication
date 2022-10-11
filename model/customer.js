const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name:{
        type:String, 
        required: true,
        min:6,
    },
    email:{
        type:String,
        required: true,
        min:6,
        max:255
    },
    loaction:{
        type:String,
        required:true,
        max:1024,
        min:6
    }
});

module.exports = mongoose.model('User',customerSchema);