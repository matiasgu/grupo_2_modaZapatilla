const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const usersFilePath = path.join(__dirname, '../models/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    // Root - Show all users
    login: (req, res) => {
        res.render('login'); // Cambia 'users' por el nombre de tu vista de usuarios
    },

    // Create - Form to create
    register: (req, res) => {
        res.render('register'); // Cambia 'user-create-form' por el nombre de tu vista de creación de usuarios
    },
    // registro por post
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

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

        res.redirect('/');
        },
    // Store - Method to store
   /* store: (req, res) => {
        // Do the magic
        const newUser = {
            id: crypto.randomUUID(),
            ...req.body
        };

        users.push(newUser);

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

        res.redirect('/');
    },*/

    // Update - Form to edit
    edit: (req, res) => {
        // Do the magic
        const idFound = req.params.id;

        const userFound = users.find(user => user.id === idFound);

        res.render('user-edit-form'); // Cambia 'user-edit-form' por el nombre de tu vista de edición de usuarios
    },

    // Update - Method to update
    update: (req, res) => {
        // Do the magic
        const idFound = req.params.id;

        const indexFound = users.findIndex(user => user.id === idFound);

        users[indexFound] = {
            id: users[indexFound].id,
            ...req.body
        };

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

        res.redirect('/');
    },

    // Delete - Delete one user from DB
    destroy: (req, res) => {
        // Do the magic
        const idToDelete = req.params.id;

        const updatedUsers = users.filter(user => user.id !== idToDelete);

        fs.writeFileSync(usersFilePath, JSON.stringify(updatedUsers, null, 2));

        res.redirect('/');
    },

    processLogin: (req, res) => {
        console.log('me logue');
        res.render('USUARIO LOGUEADO: ' + req.body.correo);
    }
    
};

module.exports = controller;
