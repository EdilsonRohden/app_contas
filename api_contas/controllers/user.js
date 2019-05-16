const User = require('../models/user.js').default;

module.exports = (app) => {
    
    app.get('/user', (req, res) => {
        
    });

    app.get('/users/user/:id', (req, res) => {
        res.send('usuario especifico');
    });

    app.post('/users/user', async (req, res) => {
        
        const { email } = req.body;

        try{
            
            if ( await User.findOne({ email })){
                return res.status(400).send({ error: 'user already exists' });
            }

            const user = await User.create(req.body);

            user.password = undefined;

            res.send({ user });
        }catch (error){
            res.status(400).send({ error: 'Registration failed' });
        }
    });
}