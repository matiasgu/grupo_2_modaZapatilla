const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../models/usersData.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    // Formulario para iniciar sesión
    login: (req, res) => {
        res.render('login'); // Renderiza la vista de inicio de sesión
    },

    // Formulario para registrar usuario
    register: (req, res) => {
        res.render('register'); // Renderiza la vista de registro de usuario
    },

    // Procesar el registro de usuario
    processRegister: (req, res) => {
        bcrypt.hash(req.body.contrasena, 10, (err, hashedPassword) => {
            if (err) {
                console.error('Error al cifrar la contraseña:', err);
                res.redirect('/users/register'); // Manejar el error de cifrado
            } else {
                const newUser = {
                    id: crypto.randomUUID(),
                    avatar: req.file?.filename || "default.png",
                    ...req.body,
                    password: hashedPassword // Guardar la contraseña cifrada
                };

                users.push(newUser);

                fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

                res.redirect('/');
            }
        });
    },

    // Procesar el inicio de sesión
    processLogin: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.correo) {
                    if (bcrypt.compareSync(req.body.contrasena, users[i].password)) {
                        let usuarioALoguearse = users[i];
                        break;
                    }
                }
            }
            if (usuarioALoguearse == undefined) {
                return res.render('login', {
                    errors: [{ msg: 'Credenciales inválidas' }]
                });
            }

            req.session.usuarioALoguearse = usuarioALoguearse;

            return res.redirect('/');

        } else {
            console.log('Hay errores');
            return res.render('login', {
                errors: errors.errors
            });
        }
    }
}

module.exports = controller;
