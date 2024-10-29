const express = require('express');
const bodyParser = require('body-parser');
const { getAllMovies, addMovie, deleteMovie, getMovieById, updateMovie } = require('./Database/crud'); // Importar el controlador

const app = express();
const port = 8081;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para procesar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para mostrar la vista principal y los datos de Firebase
app.get('/principal', async (req, res) => {
    const movies = await getAllMovies(); // Obtener todos los elementos de la colección "movies"
    res.render('principal', { movies }); // Pasamos los datos a la vista
});

// Ruta para agregar un nuevo elemento
app.post('/add-movie', async (req, res) => {
    const { caratula, genero, movieId, title, year } = req.body; // Obtén los campos correspondientes a movies
    try {
        await addMovie(caratula, genero, movieId, title, year); // Llamar a la función para agregar el elemento
        res.redirect('/principal'); // Redirigir a la vista principal
    } catch (error) {
        res.send('Error al agregar el elemento');
    }
});

// Ruta para eliminar un elemento
app.post('/delete-movie/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await deleteMovie(id); // Llamar a la función para eliminar el elemento
        res.redirect('/principal'); // Redirigir a la vista principal
    } catch (error) {
        res.send('Error al eliminar el elemento');
    }
});

// Ruta para mostrar el formulario de edición
app.get('/edit-movie/:id', async (req, res) => {
    const { id } = req.params;
    const movie = await getMovieById(id); // Llamar a la función para obtener el elemento
    res.render('editar', { movie }); // Renderizamos la vista de edición con el elemento a modificar
});

// Ruta para manejar la edición de un elemento
app.post('/edit-movie/:id', async (req, res) => {
    const { id } = req.params;
    const { caratula, genero, movieId, title, year } = req.body; // Obtén los campos correspondientes a movies
    try {
        await updateMovie(id, caratula, genero, movieId, title, year); // Llamar a la función para editar el elemento
        res.redirect('/principal'); // Redirigir a la vista principal
    } catch (error) {
        res.send('Error al actualizar el elemento');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servicio de principal escuchando en http://localhost:${port}`);
});
