const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    añoLanzamiento: { type: Number, required: true },
    backdropUrl: { type: String },
    clasificacion: { type: String },
    director: { type: String },
    duracion: { type: Number },
    generos: [{ type: String }],
    metricas: {
        calificacionPromedio: { type: Number, default: 0.0 },
        totalResenas: { type: Number, default: 0 }
    },
    posterUrl: { type: String },
    reparto: [{ type: String }],
    sinopsis: { type: String },
    titulo: { type: String, required: true }
}, { _id: false });

module.exports = mongoose.model('Movie', movieSchema);