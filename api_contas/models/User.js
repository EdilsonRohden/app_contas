const mongoose = require('../db/database');
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    acounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Acount',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

UserSchema.pre('save', async function(next) {
    
    var hash = await bcryptjs.hash(this.password, 10);
    this.password = hash; 

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = function(){ 
    return User;
}