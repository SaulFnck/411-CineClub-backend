const express = require('express');
const router = express.Router();
const User = require('../data/models/userModel');

// Crear usuario
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener usuarios
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener todas las reseñas de un usuario específico
router.get('/usuario/:usuarioId', async (req, res) => {
    try {
        // Usamos comillas para buscar dentro del objeto anidado 'usuario'
        const reviews = await Review.find({ 'usuario.usuarioId': req.params.usuarioId });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;