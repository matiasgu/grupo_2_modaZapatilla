const fs = require('fs'); /* hola */
const path = require('path');
const crypto = require('crypto');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../models/usersData.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
/* -------------sequelize------------------ */
const db = require('../database/models');
const sequelize = db.sequelize;
/* llamo a los modelos creados */
const User = db.User;
const Op = db.Sequelize.Op;
//const Products = db.Product;
//const ShopCarts = db.ShopCart; 

const controller = {
    // Formulario para iniciar sesión
    login: (req, res) => {
        console.log('estoy por loguearme');
        res.render('users/login'); // Renderiza la vista de inicio de sesión
    
    },

    // Formulario para registrar usuario
    register: (req, res) => {
        res.render('users/register'); // Renderiza la vista de registro de usuario
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
                return  res.redirect('/users/register'); // Manejar el error de cifrado
            } 
        } else {
            /* console.log('Hay errores'); */
            return res.render('users/register', {
                errors: errors.mapped(),
                oldData: req.body
            });
        }
    },
    // Procesar el inicio de sesión
    
    processLogin: async(req, res) => {
        let errors = validationResult(req);
       
        if (!errors.isEmpty()) {
            return res.render('users/login', {
                errors: errors.mapped(),
                oldData: req.body
            });
        }
        // Busca al usuario por el campo 'email'
        let userToLogin = await User.findOne({ where: { email: req.body.email } });

        //  usuario existe? y si la contraseña es correcta
    if (userToLogin && bcrypt.compareSync(req.body.password, userToLogin.dataValues.password)) {
        // Elimina el campo 'password' del objeto usuario para mayor seguridad
        delete userToLogin.dataValues.password;

        // Almacena la información del usuario en la sesión
        req.session.userLogged = userToLogin;

        // Si la opción de "remember" está activada, crea una cookie
        if (req.body.remember) {
            res.cookie('userEmail', req.body.email, { maxAge: 60000 });// 1 min
        }


        // Redirige al usuario a la home

        // Redirige al usuario a la pagina de administrador

        return res.redirect('/adm');
    } else {
        // Si la autenticación falla, renderiza la vista de login con errores y datos antiguos
        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'no'
                }
            },
            oldData: req.body
        });
    }
},
profile: (req, res) => {
    // Renderiza la vista 'userProfile' y pasa el usuario logueado como variable
    return res.render('users/Profile', { user: req.session.userLogged });
},
logout: (req, res) => {
    // Borra la cookie 'userEmail'
    res.clearCookie('userEmail');

    // Destruye la sesión del usuario
    req.session.destroy();

    // Redirige al usuario a la página principal
    return res.redirect('/');
},
update: async (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        try {
            // Obtener el ID del usuario logueado desde la sesión
            const userId = req.session.userLogged.id;
            // Crear un objeto con los datos actualizados del usuario
            const updatedData = {
                name: req.body.name,
                lastname: req.body.lastname,
                user: req.body.user,
                email: req.body.email,
                country: req.body.country,
                address: req.body.address,
                phone: req.body.phone,
            };

            // Actualiza la imagen del usuario si se ha subido una nueva
            if (req.file) {
                updatedData.image = req.file.filename;
            }

            // Actualiza la contraseña si se ha proporcionado una nueva
            if (req.body.password) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                updatedData.password = hashedPassword;
            }

            // Actualizar el usuario en la base de datos
            await db.User.update(updatedData, {
                where: { id: userId }
            });

            // Buscar el usuario actualizado en la base de datos
            let userUpdated = await db.User.findOne({ where: { id: userId } });
            delete userUpdated.dataValues.password;
            req.session.userLogged = userUpdated;

            return res.redirect('/users/profile');
        } catch (error) {
            console.error('Error updating user:', error);
            return res.render('users/Profile', {
                errors: { general: { msg: 'Error al actualizar el perfil' } },
                user: req.session.userLogged
            });
        }
    } else {
        return res.render('users/Profile', {
            errors: errors.mapped(),
            user: req.session.userLogged
        });
    }
},

}
module.exports = controller;
