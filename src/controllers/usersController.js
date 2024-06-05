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

    /* -----------------------JSON-------------------------------- */
   /*  processRegister: (req, res) => {// Procesar el registro de usuario

        //una forma mas rapido de hacer el newUser es
        /*let newProduct = req.body // con esto toda la info del body pasa a la variable
        newProduct.id = crypto.randomUUID() // de esta manera agregapor por parte lo q nos falta
        newProduct.avatar= req.file?.filename || "default.png", // como el id y avatar*/
      /*  const newUser = {
            id: crypto.randomUUID(),
            avatar:req.file?.filename || "default.png",  
            ...req.body
        };
          // los nombres de los input q sean iguales a la de la base de datos
        //users.push(newUser); 
        
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

                // los nombres de los input q sean iguales a la de la base de datos
                users.push(newUser);

                fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

                res.redirect('/');
            }
        });
       
      
    }, */
    /* -----------------------BASE DE DATO -------------------------------- */
    processRegister: async function(req, res) { // Procesar el registro de usuario
        
       /*  bcrypt.hash(req.body.contrasena, 10, (err, hashedPassword) => { */
           
                try{
                const hashedPassword = await bcrypt.hash(req.body.contrasena, 10);
                 try{
                 await db.User.create({
                    user_name: req.body.nombre,
                    user_lastname: req.body.apellido,
                    user_email: req.body.correo,
                    user_password: hashedPassword,
                    user_adress: req.body.direccion || null,
                    user_category: req.body.user_category || 'usr',
                    user_image: req.file?.filename || "default.png",
                });
                // los nombres de los input q sean iguales a la de la base de datos
               

                res.redirect('/'); 
            }catch(dbError){
                              
                console.error('Error al crear el usuario en la base de datos:', dbError);
                res.send(`<h1>Error al crear el usuario: ${dbError.message}</h1>`);
             }
            } catch (hashError){
                console.error('Error al cifrar la contraseña:', hashError);
                res.redirect('/users/register'); // Manejar el error de cifrado
            }  
 
    },
    // Procesar el inicio de sesión
    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            console.log(req.body);
            //let usuarioALoguearse = undefined;
            db.User.findOne({
                where: {
                    [Op.and]:[
                        {
                            user_email : req.body.user_email
                        },
                        {
                            user_password : req.body.user_password
                        }
                    ]}
            }).then(function(usuario) {
                console.log(usuario);
                if (usuario != null ) {
                    console.log('se encontro el usuario');
                    //usuarioALoguearse = req.body.user_email;
                    req.session.usuarioLogueado = req.body.user_email;
                    return res.redirect('/');
                }else{
                    console.log('no existe usuario');
                    req.session.usuarioLogueado = undefined;
                    return res.render('login', {
                        errors: [{ msg: 'Credenciales inválidas' }]
                    });  
                }
                
            })/*.catch(function(error){
                console.log('no existe usuario');
                return res.render('login', {
                    errors: [{ msg: 'Credenciales inválidas' }]
                });
            })*/
            //req.session.usuarioLogueado = usuarioALoguearse;
        } else {
            console.log('Hay errores');
            return res.render('login', {
                errors: errors.errors
            });
        }
    }

}
module.exports = controller;
