const fs = require('fs');
const path = require('node:path');

const productsFilePath = path.join(__dirname, '../models/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
	home: (req, res) => {
		// Do the magic
			const allProducts = products;
			res.render('home',{
				productos: allProducts
			})
	},
	productsMen: (req, res) => {
		console.log("estoy en zapatillas de hombres");
		const prodMen = products.filter((prod) => (prod.category === 'men' )||(prod.category === 'unisex'))
		res.render('home', {
			productos: prodMen
		});
	},
	productsWoman: (req, res) => {
		console.log("estoy en zapatillas de mujeres");
		const prodWoman = products.filter((prod) => (prod.category === 'woman')||(prod.category === 'unisex'))
		res.render('home', {
			productos: prodWoman
		});
	},
	productsKids: (req, res) =>{
		console.log("estoy en zapatillas de niños");
		const prodKids = products.filter((prod) => prod.category === 'kids')
		res.render('home', {
			productos: prodKids
		});
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