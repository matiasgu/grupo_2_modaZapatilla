const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { check, validationResult } = require('express-validator');
const db = require('../database/models');
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
    if (req.session.usuarioLogueado != undefined) {
        next(); // El usuario está autenticado, pasa al siguiente middleware o ruta
    } else {
        res.redirect('/users/login'); // El usuario no está autenticado, redirigir al login
    }
}

// Middleware para verificar si el usuario ya está autenticado, en cuyo caso se redirige al perfil
const verificarUsuarioLogueado = (req, res, next) => {
    if (req.session.usuarioLogueado != undefined) {
        console.log('usuario existe');
        res.redirect('/users/profile'); // El usuario ya está autenticado, redirigir al perfil
    } else {
        console.log('no usuario existe');
        next(); // El usuario no está autenticado, continúa con el siguiente middleware o ruta
    }
}
/******** middleware para login ************/
let validateUserLogin = [
    check('email')
        .notEmpty().withMessage('Debes ingresar un email').bail()
        .isEmail().withMessage('Debes ingresar un email válido'),
    check('password')
        .notEmpty().withMessage('Debes ingresar una contraseña').bail()
        .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres'),
];
/******** middleware para register ************/
let validateUser = [
    check('name').notEmpty().withMessage('Debes ingresar tu nombre'),
    check('lastname').notEmpty().withMessage('Debes ingresar tu apellido'),
    check('user').notEmpty().withMessage('Debes ingresar tu nombre de usuario'),
    check('password')
        .notEmpty().withMessage('Debes ingresar una contraseña').bail()
        .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres')
        /* .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/)
        .withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial') */
        ,
    /* check('confirmPassword')
        .notEmpty().withMessage('Debes repetir la contraseña').bail()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Las contraseñas no coinciden');
            }
            return true;
        }), */
        check('confirmPassword')
        /* .optional({ checkFalsy: true }) */
        .custom((value, { req }) => {
            const password = req.body.password;
            if (password && !value) {
                throw new Error('Debes repetir la contraseña');
            }
            if (!password && value) {
                throw new Error('Tienes que llenar el campo de arriba para comparar');
            }
            if (password && value && password !== value) {
                throw new Error('Las contraseñas no coinciden');
            }
            return true;
        }),
    check('email')
        .notEmpty().withMessage('Debes ingresar un email').bail()
        .isEmail().withMessage('Debes ingresar un email válido').bail()
        .custom(async (value) => {
            const user = await db.User.findOne({ where: { email: value } });
            if (user) {
                throw new Error('Este email ya está registrado');
            }
            return true;
        }),
    check('country').notEmpty().withMessage('Debes seleccionar un país'),
    check('acepto-terminos').equals('on').withMessage('Debes aceptar los términos y condiciones')
];
// Formulario de registro
router.get('/register', verificarUsuarioLogueado, usersController.register);
// Procesar el registro
router.post('/register', verificarUsuarioLogueado, upload.single('image'),validateUser, usersController.processRegister);

// Formulario de login
router.get('/login', verificarUsuarioLogueado, usersController.login);
// Procesar el login
router.post('/login', verificarUsuarioLogueado,validateUserLogin, usersController.processLogin);

router.get('/profile', usersController.profile);
router.get('/logout', usersController.logout);

//Usuario Logueado
router.get('/check', function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
        res.send('No estás logueado');
    } else {
        res.send('Usuario Logueado: ' + req.session.usuarioLogueado.user_email);
    }
});

module.exports = router;
