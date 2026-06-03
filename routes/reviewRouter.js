const express = require('express');
const router = express.Router();
const Review = require('../data/models/reviewModel');

// Obtener reseñas por película
router.get('/pelicula/:peliculaId', async (req, res) => {
    try {
        const reviews = await Review.find({ peliculaId: req.params.peliculaId });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear una reseña
router.post('/', async (req, res) => {
    try {
        const newReview = new Review(req.body);
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;