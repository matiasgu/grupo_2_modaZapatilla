// apiUsers.routes.js
const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controllers/api/apiUsersController');

router.get('/users', apiUsersController.list);
router.get('/users/:id', apiUsersController.detail);

module.exports = router;

