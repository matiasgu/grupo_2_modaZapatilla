const { check, validationResult } = require('express-validator');

const db = require('../../database/models');

/******** middleware para login ************/
let validateLogin = [
    check('email')
        .notEmpty().withMessage('Debes ingresar un email').bail()
        .isEmail().withMessage('Debes ingresar un email válido'),
    check('password')
        .notEmpty().withMessage('Debes ingresar una contraseña').bail()
        .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres'),
];
module.exports =validateLogin