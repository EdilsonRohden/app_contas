const express = require('express');
const User = require('../models/User.js')();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

const router = express.Router();

function generateToken( params ){
    return jwt.sign( { id: params.id } , authConfig.secret, {
        expiresIn: 86400
    });
}
//Cria um novo user
router.post('/user', async (req, res) => {
    
    const { login } = req.body;
    try{
        if ( await User.findOne({ login })){
            return res.status(400).send({ error: 'user already exists' });
        }

        const user = await User.create(req.body);

        user.password = undefined;

        res.send({ 
            user,
            token: generateToken( { id: user._id } ),
        });
    }catch (error){
        console.log(error);
        res.status(400).send({ error: 'Registration failed' });
    }
});
//Autenticação de usuario
router.post('/authenticate', async (req, res) => {
    const { login, password } = req.body;

    const user = await User.findOne({ login }).select('+password');

    if (!user){
        return res.status(400).send({ error: "User not found" });
    }

    if (!await bcrypt.compare(password, user.password)){
        return res.status(400).send({ error: "Invalid password." });
    }

    user.password = undefined;

    res.send({ 
        user,
        token: generateToken( { id: user._id } ),
    });
});    

module.exports = app => app.use('/users', router);