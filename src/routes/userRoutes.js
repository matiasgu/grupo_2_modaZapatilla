const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {check} = require('express-validator');

/******** MULTER Configuracion ************/

const storage = multer.diskStorage({
//destino del archivo
destination: (req,res,cb) => {
const pathFolder = path.join(__dirname, '..','..', 'public', 'img', 'imgUsers');
cb(null, pathFolder);
},
// le reasignamos un nombre a ese archivo
filename: (req,file,cb) => {
 const newName = 'img-' + Date.now() + path.extname(file.originalname);
 cb(null, newName)
}
})
const upload = multer ({storage}) // storage:storage

const usersController = require('../controllers/usersController');

//router.get('/', usersController.index);
// Formulario de registro
router.get('/register/', usersController.register);
// Procesar el registro
router.post('/register/',upload.single('avatar'), usersController.processRegister);

// Formulario de login
router.get('/login/', usersController.login);

//Usuario Logueado
router.post('/login/', [
    check('correo').isEmail().withMessage('Email invalido'),
    check('contrasena').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres')
], usersController.processLogin);

router.get('/check', function (req, res){
    if (req.session.usuarioLogueado == undefined) {
        res.send('no estas logueado');
    }else{
        res.send('Usuario Logueado ' + req.session.usuarioLogueado.email);
    }
});

module.exports = router;