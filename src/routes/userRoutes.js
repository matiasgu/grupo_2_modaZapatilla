const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const db = require('../database/models');

// controller
const usersController = require('../controllers/usersController');
//middlewares
const upload = require('../middleware/routeMiddleware/multerMiddleware');
const validateRegister = require('../middleware/routeMiddleware/validateRegisterMiddleware');
const validateLogin = require('../middleware/routeMiddleware/validateLoginMiddleware');
const validateProfile = require('../middleware/routeMiddleware/validateProfileMiddleware');
//middleware de ruta 
const guestMiddleware = require('../middleware/routeMiddleware/guestMiddleware');//si estoy login, me muestre el perfil
const authMiddleware = require('../middleware/routeMiddleware/authMiddleware');//si no esoy login, no me deje entrar al perfil




// Formulario de registro
router.get('/register', guestMiddleware, usersController.register);
// Procesar el registro
router.post('/register', upload.single('image'),validateRegister, usersController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, usersController.login);
// Procesar el login
router.post('/login',validateLogin, usersController.processLogin);

router.get('/profile', authMiddleware,usersController.profile);

router.get('/logout', usersController.logout);

router.put('/update/:id', upload.single('image'), usersController.update);
/* router.patch('/updatePassword/:id', usersController.updatePassword); */


//Usuario Logueado
router.get('/check', function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
        res.send('No estás logueado');
    } else {
        res.send('Usuario Logueado: ' + req.session.usuarioLogueado.user_email);
    }
});

module.exports = router;
