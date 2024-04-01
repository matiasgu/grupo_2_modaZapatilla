const fs = require('fs');
const path = require('node:path');

const productsFilePath = path.join(__dirname, '../models/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
	home: (req, res) => {
		// Do the magic
			const allProducts = products;
			res.render('home',{
				todosLosProductos: allProducts
			})
	},
	productsMen: (req, res) => {
		const prodMen = products.filter((prod) => (prod.category === 'men' )||(prod.category === 'unisex'))
		res.render('productDetail', {
			productosHombres: prodMen
		});
	},
	productsWoman: (req, res) => {
		const prodWoman = products.filter((prod) => (prod.category === 'woman')||(prod.category === 'unisex'))
		res.render('productDetail', {
			productosMujeres: prodWoman
		});
	},
	productsKids: (req, res) =>{
		const prodKids = products.filter((prod) => prod.category === 'kids')
		res.render('productDetail', {
			productosNinos: prodKids
		});
	}

};

module.exports = controller;