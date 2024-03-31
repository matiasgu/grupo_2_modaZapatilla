const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    // Root - Show all users
    index: (req, res) => {
        res.render('users'); // Cambia 'users' por el nombre de tu vista de usuarios
    },

    // Create - Form to create
    create: (req, res) => {
        res.render('user-create-form'); // Cambia 'user-create-form' por el nombre de tu vista de creación de usuarios
    },

    // Store - Method to store
    store: (req, res) => {
        // Do the magic
        const newUser = {
            id: crypto.randomUUID(),
            ...req.body
        };

        users.push(newUser);

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

        res.redirect('/');
    },

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
    }
};

module.exports = controller;
