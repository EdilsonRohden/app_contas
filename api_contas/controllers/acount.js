module.exports = (app) => {
    
    app.get('/acounts', (req, res) => {
        res.send('Todas as contas listadas.');
    });

    app.get('/acounts/acount', (req, res) => {
        res.send('apenas uma conta listada');
    });

    app.post('/acounts/acount', (req, res) => {
        var acount = req.body;
        res.send('Conta cadastrada.');
    });
}