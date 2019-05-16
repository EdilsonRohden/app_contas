const mongoose = require('../db/database.js');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async (next) => {
    
    var hash = await bcryptjs.hash(this.password, 10);
    this.password = hash; 

    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;