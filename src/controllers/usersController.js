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

        //una forma mas rapido de hacer el newUser es
        /*let newProduct = req.body // con esto toda la info del body pasa a la variable
        newProduct.id = crypto.randomUUID() // de esta manera agregapor por parte lo q nos falta
        newProduct.avatar= req.file?.filename || "default.png", // como el id y avatar*/
       const newUser = {
            id: crypto.randomUUID(),
            avatar:req.file?.filename || "default.png",  
            ...req.body
        };
          // los nombres de los input q sean iguales a la de la base de datos
        users.push(newUser);

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
