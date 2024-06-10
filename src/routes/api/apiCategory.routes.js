const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/api/apiCategoryController');

router.get('/categories', categoryController.list);

module.exports = router;
