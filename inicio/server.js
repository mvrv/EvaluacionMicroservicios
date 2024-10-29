// principal.js
const express = require('express');
const app = express();
const port = 9002;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views');

// Ruta para mostrar la vista principal (será /principal)
app.get('/', (req, res) => {
    res.render('inicio');  // Renderiza el archivo inicio.ejs
});

// Iniciar el servicio de inicio
app.listen(port, () => {
    console.log(`Servicio de inicio escuchando en http://localhost:${port}`);
});
