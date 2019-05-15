const app = require('./config/custom-express.js')();

app.listen(3000, () => console.log('Rodando na porta 3000'));
