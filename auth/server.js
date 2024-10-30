// auth.js
const express = require('express');
const session = require('express-session');
const app = express();
const port = 8080;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de la sesión
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: true,
}));

// Ruta para el formulario de login (será /auth/login)
app.get('/api-gatewayauth/login', (req, res) => {
    res.render('login');  // Renderiza el archivo login.ejs
});

// Ruta para manejar el inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validar usuario y contraseña (simulación)
    if (username === 'admin' && password === '1234') {
        req.session.user = username;  // Guardar el usuario en la sesión
        res.redirect('/pagina/principal');  // Redirigir al servicio mostrar a través del gateway
    } else {
        res.send('Usuario o contraseña incorrecta');
    }
});

// Iniciar el servicio de autenticación
app.listen(port, () => {
    console.log(`Servicio de autenticación escuchando en http://localhost:${port}`);
});
