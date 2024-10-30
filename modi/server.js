const express = require('express');
const bodyParser = require('body-parser');
const { getAllMovies, addMovie, deleteMovie, getMovieById, updateMovie } = require('./Database/crud'); 

const app = express();
const port = 8081;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/modi', async (req, res) => {
    const movies = await getAllMovies(); 
    res.render('principal', { movies }); 
});

// Ruta para agregar un nuevo elemento
app.post('/add-item', async (req, res) => {
    const { caratula, genero, movieId, title, year } = req.body; 
    try {
        await addMovie(caratula, genero, movieId, title, year); 
        res.redirect('/modi');
    } catch (error) {
        res.send('Error al agregar el elemento');
    }
});

// Ruta para eliminar un elemento
app.post('/delete-item/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await deleteMovie(id); 
        res.redirect('/modi');
    } catch (error) {
        res.send('Error al eliminar el elemento');
    }
});

// Ruta para mostrar el formulario de edición
app.get('/edit-item/:id', async (req, res) => {
    const { id } = req.params;
    const item = await getMovieById(id); 
    res.render('editar', { item }); 
});

// Ruta para manejar la edición de un elemento
app.post('/edit-item/:id', async (req, res) => {
    const { id } = req.params;
    const { caratula, genero, movieId, title, year } = req.body; 
    try {
        await updateMovie(id, caratula, genero, movieId, title, year); 
        res.redirect('/modi');
    } catch (error) {
        res.send('Error al actualizar el elemento');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servicio de principal escuchando en http://localhost:${port}`);
});
