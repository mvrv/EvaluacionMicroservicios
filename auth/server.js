// auth.js
const express = require('express');
const session = require('express-session');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: true,
}));

app.get('/auth/login', (req, res) => {
    res.render('login'); 
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '1234') {
        req.session.user = username;  
        res.redirect('/pagina/principal');  
    } else {
        res.send('Usuario o contraseña incorrecta');
    }
});

app.listen(port, () => {
    console.log(`Servicio de autenticación escuchando en http://localhost:${port}`);
});
