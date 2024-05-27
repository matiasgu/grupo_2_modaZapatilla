const fs = require('fs');
const path = require('node:path');

const productsFilePath = path.join(__dirname, '../models/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//Codigo BD
let db = require("../../database/models");
const Op = db.Sequelize.Op;

const controller = {
	home: (req, res) => {
		/*Do the magic
			/*Codigo sin DB
			const allProducts = products;
			res.render('home',{
				productos: allProducts
			})
			*/
			db.Productos.findAll()
			.then(function(productos) {
				res.render('home',{productos: productos});
			})
	},
	productsMen: (req, res) => {
		/*Codigo sin BD
		console.log("estoy en zapatillas de hombres");
		const prodMen = products.filter((prod) => (prod.category === 'men' )||(prod.category === 'unisex'))
		res.render('home', {
			productos: prodMen
		});
		*/
		db.Productos.findAll({
			where: {
			[Op.or]: [{
				product_category : 'man' 
			},
			{
				product_category : 'unisex'
			}]
			}	
		}		
		)
		.then(function(productos) {
			res.render('home',{productos: productos});
		})
	},
	productsWoman: (req, res) => {
		/*CODIGO SIN DB
		console.log("estoy en zapatillas de mujeres");
		const prodWoman = products.filter((prod) => (prod.category === 'woman')||(prod.category === 'unisex'))
		res.render('home', {
			productos: prodWoman
		});
		*/
		db.Productos.findAll({
			where:{
			[Op.or]:
			[{
				product_category : 'woman'},
			{
				product_category :'unisex' 
			}]
			}
		})
		.then(function(productos) {
			res.render('home',{productos: productos});
		})
	},
	productsKids: (req, res) =>{
		/*CODIGO SIN DB
		console.log("estoy en zapatillas de niños");
		const prodKids = products.filter((prod) => prod.category === 'kids')
		res.render('home', {
			productos: prodKids
		});
		*/
		db.Productos.findAll({
			where: {
				product_category : 'kids', 
			}
		}			
		)
		.then(function(productos) {
			res.render('home',{productos: productos});
		})		
	},

    controlSession: (req, res) => {
        if(req.session.numeroVisitas == undefined){
            req.session.numeroVisitas = 0;
        }
        req.session.numeroVisitas ++;
        res.send('VISITA NRO: ' + req.session.numeroVisitas);

    }

};

module.exports = controller;