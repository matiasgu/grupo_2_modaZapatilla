// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 


/*** GET PRODUCT ADM ***/ 
router.get('/adm/:id', productsController.adm); 

// /*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); 
router.post('/store/', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id', productsController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/:id', productsController.update); 


// /*** DELETE ONE PRODUCT ***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;