const mongoose = require('../db/database');

const AcountSchema = new mongoose.Schema({
    
    description: {
        type: String,
        required: true,
    },
    user: {
    	type: mongoose.Schema.Types.ObjectId,
    	ref: 'User',
    	require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    moves: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mov',
    }]
    
});

const Acount = mongoose.model('Acount', AcountSchema);

module.exports = function(){ 
    return Acount;
}