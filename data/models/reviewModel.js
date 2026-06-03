const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    calificacion: { type: Number, required: true },
    comentario: { type: String },
    fechaPublicacion: { type: Date, default: Date.now },
    peliculaId: { type: Number, required: true, ref: 'Movie' },
    usuario: {
        nombre: { type: String, required: true },
        usuarioId: { type: Number, required: true, ref: 'User' }
    }
}, { _id: false });

module.exports = mongoose.model('Review', reviewSchema);