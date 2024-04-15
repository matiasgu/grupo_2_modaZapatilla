const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.get('/mens/', homeController.productsMen);
router.get('/womans/', homeController.productsWoman);
router.get('/kids/', homeController.productsKids);

module.exports = router;