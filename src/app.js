const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

//EJS
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));


// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const homeRouter = require('./routes/homeRoutes'); // Rutas main
//const productsRouter = require('./routes/products'); // Rutas /products

app.use('/', homeRouter);
//app.use('/products', productsRouter);


//******PUT Y DELETE**********/
app.use(methodOverride('_method'));




// // home
// app.get('/', (req, res) =>{
//        res.render("home");
//  });

// /* agregue esto al app para mi register */
//  app.get('/register', (req, res) => {
//       res
//       .render("register");
// });

// /*Product Detail*/
// app.get('/productDetail', (req, res) => {
//       res.render("productDetail");
//   });

// //   login
//   app.get('/login', (req, res) => {
//       res.render("login");
//   });

// // producto cart
//   app.get('/productCart', (req, res) => {
//       res.render("productCart");
//   });
// // producto load
// app.get('/productLoad', (req, res) => {
//   res.render("productLoad");
// });
  

app.use(express.static('./public'));

app.listen(3000, () => console.log('Server running at http://localhost:3000'));




