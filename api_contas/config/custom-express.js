var express = require('express');
var bodyParser = require('body-parser');


module.exports = () => {
    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    require('../controllers/user')(app);
    require('../controllers/acount')(app);

    return app;
};