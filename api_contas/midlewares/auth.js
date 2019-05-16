const jwt = require('jsonwebtoken');
const autHash = require('../config/auth.json');

module.exports = (req, res, next) => {
    const headers = req.headers.authorization;

    if (!headers){
        return res.status(401).send({ error: 'No token detected' });
    }
    
    const parts = headers.split(' ');

    if (!parts.length === 2){
        return res.status(401).send({ error: 'malformed token' });
    }

    const [ scheme, token ] = parts;

    if ( !/^Bearer$/i.test(scheme) ){
        return res.status(401).send({ error: 'Token malformated' });
    }

    jwt.verify(token, autHash.secret, (err, decoded) => {
        if (err){
            return res.status(401).send({ error: err })
        }

        req.userId = decoded.id;

        return next();
    });

};