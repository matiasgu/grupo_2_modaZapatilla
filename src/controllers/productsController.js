const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../models/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//Codigo implementando Base de datos

let db = require("../../database/models");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		/*Codigo sin BD
		res.render('productDetail', {productos: products});
		*/
		db.Productos.findAll()
			.then(function(productos) {
				res.render('productDetail',{productos: products});
			})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		/*Codigo sin BD
		const productId = req.params.id;
		const productFound = products.findIndex( (product) => product.id === productId );
		console.log(productFound);
		console.log(products[productFound]);
		res.render('productDetail', {producto : products[productFound]});
		*/
	},

	// Create - Form to create
	create: (req, res) => {
		console.log("estoy en el create");
		/*Codigo sin BD
		res.render('productCreate');
		*/
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		/*Codigo sin BD
		console.log(req.body);
        const newProduct = {
            id: products.length + 1,
			name: req.body.name,
			img: req.body.img,
			brand: req.body.brand,
			category: req.body.category,
			price: req.body.price
        };

        // JS
        products.push(newProduct);

        // JSON
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2 ) ) // JS a JSON

        res.redirect('/')		
		*/
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
        /*Codigo sin BD
		const idFound = req.params.id;
        const productFound = products.find( ( product ) => product.id === idFound );
		console.log("estoy en el edit");
		res.render('productLoad', {producto: productFound}); 
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
        const idFound = req.params.id;
		console.log("estoy en el edit update" + idFound);
        const indexFound = products.findIndex( ( product ) => product.id === idFound );

        products[indexFound] = {
            id: products[indexFound].id,
            ...req.body,
            // name: req.body.name,
	    	// image: req.body.image,
            // brand: req.body.brand,
            // category: req.body.category,
            // price: req.body.price,						
        }

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2 ) ); // JS a JSON

        res.redirect('/');
		*/
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
        /*Codigo sin BD
		const idFound = req.params.id;
        
        const productos = products.filter( ( user ) => user.id !== idFound ); //realiza un nuevo array sin el elemento a eliminar

        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 2))

        res.redirect('/')
		*/
	}
};

module.exports = controller;