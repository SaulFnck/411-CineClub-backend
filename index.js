const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./data/database');

const rutas = require('./routes/rutas'); 

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', rutas); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});