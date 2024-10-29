const express = require('express');
const bodyParser = require('body-parser');
const { getAllItems, addItem, deleteItem, getItemById, updateItem } = require('./Database/crud'); // Importar el controlador

const app = express();
const port = 8081;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para procesar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para mostrar la vista principal y los datos de Firebase
app.get('/principal', async (req, res) => {
    const items = await getAllItems(); // Obtener todos los elementos
    res.render('principal', { items }); // Pasamos los datos a la vista
});

// Ruta para agregar un nuevo elemento
app.post('/add-item', async (req, res) => {
    const { songName, artistName, coverUrl } = req.body; // Obtén los nuevos campos
    try {
        await addItem(songName, artistName, coverUrl); // Llamar a la función para agregar el elemento
        res.redirect('/pagina/principal');
    } catch (error) {
        res.send('Error al agregar el elemento');
    }
});

// Ruta para eliminar un elemento
app.post('/delete-item/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await deleteItem(id); // Llamar a la función para eliminar el elemento
        res.redirect('/pagina/principal');
    } catch (error) {
        res.send('Error al eliminar el elemento');
    }
});

// Ruta para mostrar el formulario de edición
app.get('/edit-item/:id', async (req, res) => {
    const { id } = req.params;
    const item = await getItemById(id); // Llamar a la función para obtener el elemento
    res.render('editar', { item }); // Renderizamos la vista de edición con el elemento a modificar
});

// Ruta para manejar la edición de un elemento
app.post('/edit-item/:id', async (req, res) => {
    const { id } = req.params;
    const { songName, artistName, coverUrl } = req.body; // Obtén los nuevos campos
    try {
        await updateItem(id, songName, artistName, coverUrl); // Llamar a la función para editar el elemento
        res.redirect('/pagina/principal');
    } catch (error) {
        res.send('Error al actualizar el elemento');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servicio de principal escuchando en http://localhost:${port}`);
});
