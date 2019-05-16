const User = require('../models/User.js')();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const autHash = require('../config/auth.json');

module.exports = (app) => {

    function generateToken( params ){
        return jwt.sign({ params }, autHash.secret, {
            expiresIn: 86400
        });
    }
    
    app.get('/user', (req, res) => {
        
    });

    app.get('/users/user/:id', (req, res) => {
        res.send('usuario especifico');
    });

    app.post('/users/user', async (req, res) => {
        
        const { login } = req.body;
        try{
            if ( await User.findOne({ login })){
                return res.status(400).send({ error: 'user already exists' });
            }

            const user = await User.create(req.body);

            user.password = undefined;

            res.send({ 
                user,
                token: generateToken( { id: user.id } ),
            });
        }catch (error){
            console.log(error);
            res.status(400).send({ error: 'Registration failed' });
        }
    });

    app.post('/users/authenticate', async (req, res) => {
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
            token: generateToken( { id: user.id } ),
        });

    });
}