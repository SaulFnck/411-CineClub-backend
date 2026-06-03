const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./data/database');

const userRouter = require('./routes/userRouter');
const movieRouter = require('./routes/movieRouter');
const reviewRouter = require('./routes/reviewRouter');

const app = express();

// Configuración CORS estricta requerida
app.use(cors());
app.use(express.json());

// Conexión a Base de Datos
connectDB();

// Registro de Rutas
app.use('/api/users', userRouter);
app.use('/api/movies', movieRouter);
app.use('/api/reviews', reviewRouter);

// Puerto Dinámico
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});