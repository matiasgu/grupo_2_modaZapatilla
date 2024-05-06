const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { check } = require('express-validator');

/******** MULTER Configuracion ************/

const storage = multer.diskStorage({
    //destino del archivo
    destination: (req, res, cb) => {
        const pathFolder = path.join(__dirname, '..', '..', 'public', 'img', 'imgUsers');
        cb(null, pathFolder);
    },
    // le reasignamos un nombre a ese archivo
    filename: (req, file, cb) => {
        const newName = 'img-' + Date.now() + path.extname(file.originalname);
        cb(null, newName)
    }
})
const upload = multer({ storage }) // storage:storage

const usersController = require('../controllers/usersController');

// Middleware para verificar la autenticación del usuario
const verificarAutenticacion = (req, res, next) => {
    if (req.session.usuarioLogueado) {
        next(); // El usuario está autenticado, pasa al siguiente middleware o ruta
    } else {
        res.redirect('/users/login'); // El usuario no está autenticado, redirigir al login
    }
}

// Middleware para verificar si el usuario ya está autenticado, en cuyo caso se redirige al perfil
const verificarUsuarioLogueado = (req, res, next) => {
    if (req.session.usuarioALoguearse) {
        res.redirect('/users/profile'); // El usuario ya está autenticado, redirigir al perfil
    } else {
        next(); // El usuario no está autenticado, continúa con el siguiente middleware o ruta
    }
}

// Formulario de registro
router.get('/register', verificarUsuarioLogueado, usersController.register);
// Procesar el registro
router.post('/register', verificarUsuarioLogueado, upload.single('avatar'), usersController.processRegister);

// Formulario de login
router.get('/login', verificarUsuarioLogueado, usersController.login);
// Procesar el login
router.post('/login', verificarUsuarioLogueado, [
    check('correo').isEmail().withMessage('Email inválido'),
    check('contrasena').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
], usersController.processLogin);

//Usuario Logueado
router.get('/check', function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
        res.send('No estás logueado');
    } else {
        res.send('Usuario Logueado: ' + req.session.usuarioLogueado.email);
    }
});

module.exports = router;
