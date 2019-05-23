const express = require('express');
const Acount = require('../models/Acount')();
const Mov = require('../models/Mov')();
const AuthMidlleWare = require('../midlewares/auth');

const router = express.Router();

router.use(AuthMidlleWare);

router.post('/mov', async (req, res) =>{

    try{

        const { acount, description, value, tipo } = req.body;
        console.log(acount);
        acountFinded = await Acount.findOne({ _id : acount._id });
        console.log(acountFinded);
        const mov = await Mov.create({ description, tipo, value, acount });
        await acountFinded.moves.push(mov);
        await acountFinded.save();
    
        res.send({ acountFinded });
    }catch (err){
        res.status(400).send({ error: 'Failed to add mov' });
        console.log(err);
    }

});

module.exports = app => app.use('/moves', router);