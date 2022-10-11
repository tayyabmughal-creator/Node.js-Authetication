const router = require('express').Router();
const user = require('../model/user');
const Joi = require('@hapi/joi');

const Schema = {
    name: Joi.string().min(6).required(),
    email:Joi.string().min(6).required().email(),
    password:Joi.string().min(6).required()
}

router.post('/register', async (req,res)=>{
    const user = new User({
    name: req.body.name, 
    email:req.body.email,
    password:req.body.password
    
});

try{
        const savedUser = await user.save();
        res.send(saveduser);
} 
catch(err) 
{
        res.status(400).send(err);
}
});

module.exports = router;




 