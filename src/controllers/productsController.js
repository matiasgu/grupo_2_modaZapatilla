const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../models/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('productDetail', {productos: products});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const productId = req.params.id;
		consolog.log(req.params.id)
		const productFound = products.findIndex( (product) => product.id === productId );
		res.render('productDetail',{producto : productFound});
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
        const newProduct = {
            id: crypto.randomUUID(),
            ...req.body
        };

        // JS
        products.push(newProduct);

        // JSON
        fs.writeFileSync( pathFile, JSON.stringify(products, null, 2 ) ) // JS a JSON

        res.redirect('/')		
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
        const idFound = req.params.id;

        const productFound = products.find( ( product ) => product.id === idFound );

		res.render('productLoad'); 
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
        const idFound = req.params.id;

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

        fs.writeFileSync( pathFile, JSON.stringify(products, null, 2 ) ); // JS a JSON

        res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic

	}
};

module.exports = controller;