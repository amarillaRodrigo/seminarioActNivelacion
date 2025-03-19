// filepath: mi-sitio-web/src/routes/index.js
const express = require('express');
const router = express.Router();

// Define una ruta principal
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Otras rutas pueden ser definidas aquí

module.exports = router;