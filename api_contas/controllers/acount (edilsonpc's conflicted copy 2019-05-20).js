const express = require('express');
const Acount = require('../models/Acount')();
const Mov = require('../models/Mov')();
const authMidlleware = require('../midlewares/auth');

const router = express.Router();

router.use(authMidlleware);

//Criar uma nova conta
router.post('/acount', async (req, res) => {

    const acount = await Acount.create({ ...req.body, user: req.userId });    

    return res.send({ acount });
    
});
//Listar todas as contas
router.get('/', async (req, res) => {
	
	try {

		const acounts = await Acount.find().populate('user');

		return res.send({ acounts });

	} catch (err){
		res.status(400).send({ error: 'Error loading acounts' });
	}

});
//lista conta especifica
router.get('/:acountId', async (req, res) => {

	try{

		const acount = await Acount.find({ ...req.acountId }).populate(['user', 'moves']);

		return res.send({ acount });

	}catch (err){
		return res.status(400).send({ error: 'Error loading acount' });
	}

});

//Altera uma conta
router.put('/:acountId', async (req, res) => {

	try{

		const acount = await Acount.update({ _id: acountId },{
			$set: {
				req.body;
			}
		});

		return res.send({ acount });

	}catch (err){
		return res.status(400).send({ error: 'Error loading acount' });
	}

});

//Delete uma conta
router.delete('/:acountId', async (req, res) => {

	try{

		Acount.remove({ _id: req.acountId });

		return res.send();

	}catch (err){
		return res.status(400).send({ error: 'Error loading acount' });
	}

});




module.exports = app => app.use('/acounts', router);