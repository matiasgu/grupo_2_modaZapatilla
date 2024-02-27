const fs = require('fs');
const path = require('node:path');

const productsFilePath = path.join(__dirname, '../models/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
	home: (req, res) => {
		// Do the magic
		const allProducts = products;
        console.log(allProducts);
/*
		const inSaleProducts = products.filter ((product) => product.category == 'in-sale');
*/
			res.render('home',{
				todosLosProductos: allProducts
				/*productosOferta: inSaleProducts*/
			})
		},
/*
		search: (req, res) => {
			// Do the magic
			//Capturar la info de queryParams
			const busqueda = req.query.keywords;
			//Extraer los product que matcheen con la busqueda
			const productosBuscado = products.filter((product)=> product.name === busqueda);
			//Vista
			res.render('results',{busqueda: busqueda, productosBuscado: productosBuscado});
		},*/
};

module.exports = controller;