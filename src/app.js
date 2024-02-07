const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));

// home
app.get('/', (req, res) =>{
       res.render("home");
 });

/* agregue esto al app para mi register */
 app.get('/register', (req, res) => {
      res
      .render("register");
});

/*Product Detail*/
app.get('/productDetail', (req, res) => {
      res.render("productDetail");
  });

//   login
  app.get('/login', (req, res) => {
      res.render("login");
  });

// producto cart
  app.get('/productCart', (req, res) => {
      res.render("productCart");
  });
// producto load
app.get('/productLoad', (req, res) => {
  res.render("productLoad");
});
  

app.use(express.static('./public'));

app.listen(3000, () => console.log('Server running at http://localhost:3000'));



// app.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, '/views/home.html'));
// });
// /* agregue esto al app para mi register.html */
// app.get('/register', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/register.html'));
// });

// /*Product Detail*/ 
// app.get('/productDetail', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/productDetail.html'));
// });
