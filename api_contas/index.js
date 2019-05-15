const express = require('./config/custom-express.js')();

var app = express();

app.listen(3000, () => console.log('Rodando na porta 3000'));
