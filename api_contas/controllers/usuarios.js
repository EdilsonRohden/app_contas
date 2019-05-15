module.exports = (app) => {
    
    app.get('/usuarios', (req, res) => {
        res.send('usuarios.');
    });

    app.get('/usuarios/usuario/:id', (req, res) => {
        res.send('usuario especifico');
    });

    app.post('/usuarios/usuario', (req, res) => {
        let usuario = req.body;
        console.log(usuario);
        res.send('OK.');
    });
}