module.exports = (app) => {
    
    app.get('/contas', (req, res) => {
        res.send('Todas as contas listadas.');
    });

    app.get('/contas/conta', (req, res) => {
        res.send('apenas uma conta listada');
    });

    app.post('/contas/conta', (req, res) => {
        let conta = req.body;
        res.send('Conta cadastrada.');
    });
}