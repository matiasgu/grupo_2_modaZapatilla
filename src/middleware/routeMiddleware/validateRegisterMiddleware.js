/* const path = require('path'); */
const { check, validationResult } = require('express-validator');

const db = require('../../database/models');

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
module.exports=validateUser