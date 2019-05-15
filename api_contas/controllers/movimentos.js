module.exports = (app) => {
    
    app.post('/movimentos/movimento', (req, res) => {
        let movimento = req.body;
        console.log(movimento);
        res.send('Ok.');
    });

    app.get('/movimentos', (req, res) => {
        res.send('todos os pagamentos listados');
    });

    app.get('/movimentos/movimento/:id', (req, res) => {
        res.send('Apenas um movimento do client');
    });
}