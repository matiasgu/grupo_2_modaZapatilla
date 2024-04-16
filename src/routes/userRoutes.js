const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

//router.get('/', usersController.index);
// Formulario de registro
router.get('/register', usersController.register);
// Formulario de login
router.get('/login', usersController.login);

module.exports = router;