// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const shopCartsController = require('../controllers/shopCartsController');

// /*** GET ALL PRODUCTS ***/ 
// router.get('/', carritoCompraController.index); 

// // /*** CREATE ONE PRODUCT ***/ 
// router.get('/create/', carritoCompraController.create); 
// router.post('/store/', carritoCompraController.store); 


// /*** GET ONE PRODUCT ***/ 
// router.get('/:id', carritoCompraController.detail); 

// // /*** EDIT ONE PRODUCT ***/ 
// router.get('/edit/:id', carritoCompraController.edit); 
// router.put('/:id', carritoCompraController.update); 


// // /*** DELETE ONE PRODUCT ***/ 
// router.delete('/:id', carritoCompraController.destroy); 


module.exports = router;