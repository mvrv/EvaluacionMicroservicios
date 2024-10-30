const express = require('express');
const app = express();
const port = 9002;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('inicio'); 
});

app.listen(port, () => {
    console.log(`Servicio de inicio escuchando en http://localhost:${port}`);
});
