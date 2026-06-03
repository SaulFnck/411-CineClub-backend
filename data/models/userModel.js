const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: { type: Number, required: true }, 
    misReseñas: [{ type: Number }], 
    password: { type: String, required: true },
    usuario: { type: String, required: true }
}, { _id: false }); 

module.exports = mongoose.model('User', userSchema);