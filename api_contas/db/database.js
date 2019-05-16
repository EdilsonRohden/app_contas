const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/api_contas', { useNewUrlParser: true })
    .then(() => console.log('Sucesso ao conectar com o banco.'), err => console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;