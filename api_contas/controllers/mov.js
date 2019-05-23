const express = require('express');
const Acount = require('../models/Acount')();
const Mov = require('../models/Mov')();
const AuthMidlleWare = require('../midlewares/auth');

const router = express.Router();

router.use(AuthMidlleWare);

router.post('/mov', async (req, res) =>{

    try{

        const { acount, description, value, tipo } = req.body;
    
        const acount = await Acount.find({ acount });
        const mov = await Mov.create({ description, tipo, value, acount });
        await acount.move.push(mov);
        await acount.save();
    
        res.send({ acount });
    }catch (err){
        res.status(400).send({ error: 'Failed to add mov' });
    }

});