const mongoose = require('../db/database');

const MovSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true
    },
    value: {
        type: String,
        require: true,
    },
    acount:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Acount',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Mov = mongoose.model('Mov', MovSchema);

module.exports = function(){ 
    return Mov;
}