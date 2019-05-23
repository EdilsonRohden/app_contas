const express = require('express');
const Acount = require('../models/Acount')();
const Mov = require('../models/Mov')();
const authMidlleware = require('../midlewares/auth');

const router = express.Router();

router.use(authMidlleware);

//Listar todas as contas
router.get('/', async (req, res) => {
	
	try {

		const acounts = await Acount.find().populate(['user', 'moves']);

		return res.send({ acounts });

	} catch (err){
		res.status(400).send({ error: 'Error loading acounts' });
	}

});
//Criar uma nova conta
router.post('/acount', async (req, res) => {
	try{

		const { description, moves } = req.body;

		const acount = await Acount.create({ description, user: req.userId });    
	
		await Promise.all(moves.map(async move => {
			const acountMov = new Mov({ ...move, acount: acount._id }) ;
	
			await acountMov.save();
			acount.moves.push(acountMov);
	
		}));
	
		await acount.save();
	
		return res.send({ acount });

	}catch (err){
		console.log(err);
		res.status(400).send({ error: "Erro ao criar conta" })
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

		const { description, moves } = req.body;

		const acount = await Acount.findByIdAndUpdate(req.params.acountId ,{ description }, { new: true });    
	
		acount.moves = [];
		await Mov.remove({ acount: acount._id });

		await Promise.all(moves.map(async move => {
			const acountMov = new Mov({ ...move, acount: acount._id }) ;
	
			await acountMov.save();
			acount.moves.push(acountMov);
	
		}));
	
		await acount.save();
	
		return res.send({ acount });

	}catch (err){
		console.log(err);
		res.status(400).send({ error: "Erro ao criar conta" })
	}

});

//Delete uma conta
router.delete('/:acountId', async (req, res) => {

	try{

		await Acount.remove({ _id: req.acountId });
		return res.send();

	}catch (err){
		return res.status(400).send({ error: 'Error deleting acount' });
	}

});


module.exports = app => app.use('/acounts', router);