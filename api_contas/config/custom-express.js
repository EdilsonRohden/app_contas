var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


module.exports = () => {
    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cors());

    require('../controllers/user')(app);
    require('../controllers/acount')(app);

    return app;
};