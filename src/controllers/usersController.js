const fs = require('fs'); /* hola */
const path = require('path');
const crypto = require('crypto');
const { check, validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../models/usersData.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
/* -------------sequelize------------------ */
const db = require('../database/models');
const sequelize = db.sequelize;
/* llamo a los modelos creados */
const Users = db.User;
const Op = db.Sequelize.Op;
//const Products = db.Product;
//const ShopCarts = db.ShopCart; 

const controller = {
    // Formulario para iniciar sesión
    login: (req, res) => {
        console.log('estoy por loguearme');
        res.render('login'); // Renderiza la vista de inicio de sesión
    },

    // Formulario para registrar usuario
    register: (req, res) => {
        res.render('register'); // Renderiza la vista de registro de usuario
    },

    /* -----------------------BASE DE DATO -------------------------------- */
    processRegister: async function(req, res) { // Procesar el registro de usuario
        const errors = validationResult(req);
       /*  bcrypt.hash(req.body.contrasena, 10, (err, hashedPassword) => { */
       if (errors.isEmpty()) {
                try{
                   // console.log("Datos recibidos en req.body:", req.body);
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                 try{
                  await db.User.create({
                    name: req.body.name,
                    lastname: req.body.lastname,
                    user: req.body.user,
                    password: hashedPassword,
                    email: req.body.email,
                    image: req.file?.filename || "default.png", 
                    country: req.body.country,
                    address: req.body.address || "san salvador de jujuy",
                    phone: req.body.phone || null,
                                       
                });
                // los nombres de los input q sean iguales a la de la base de datos
               
                
                return res.redirect('/users/login');

            }catch(dbError){
                              
                console.error('Error al crear el usuario en la base de datos:', dbError);
                res.send(`<h1>Error al crear el usuario: ${dbError.message}</h1>`);
             }
            } catch (hashError){
                console.error('Error al cifrar la contraseña:', hashError);
                res.redirect('/users/register'); // Manejar el error de cifrado
            }  
        } else {
            console.log('Hay errores');
            return res.render('register', {
                errors: errors.errors
            });
        }
    },
    // Procesar el inicio de sesión
    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            console.log(req.body);
            db.User.findOne({
                where: {
                    [Op.and]:[
                        {
                            email : req.body.email
                        },
                        {
                            password : req.body.password
                        }
                    ]}
            }).then(function(usuario) {
                console.log(usuario);
                if (usuario != null ) {
                    console.log('se encontro el usuario');
                    req.session.usuarioLogueado = usuario;
                    return res.redirect('/');
                }else{
                    console.log('no existe usuario');
                    req.session.usuarioLogueado = undefined;
                    return res.render('login', {
                        errors: [{ msg: 'Credenciales inválidas' }]
                    });  
                }
            })
        } else {
            console.log('Hay errores');
            return res.render('login', {
                errors: errors.errors
            });
        }
    }

}
module.exports = controller;
