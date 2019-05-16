const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/api_contas', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;