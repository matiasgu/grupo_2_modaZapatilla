// ************ Require's ************
const createError = require('http-errors');
//const cookieParser = require('cookie-parser');
const express = require('express');
//const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
var session = require('express-session');
const cookieParser = require('cookie-parser');
// ************ express() - (don't touch) ************
const app = express();

const userLoggedMiddleware = require('./middleware/appMiddleware/userLoggedMiddleware')

// ************ Middlewares - (don't touch) ************
app.use(express.static('public'));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false })); //para poder utilizar body
//app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method')); // Para poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session ({
  secret: 'SECRETO!!!',
 resave: false,
 saveUninitialized:false,
}));
app.use(userLoggedMiddleware);// va despues de session
// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas



// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRoute = require('./routes/homeRoutes'); // Rutas main
const productsRoutes = require('./routes/productRoutes'); // Rutas /products
const usersRoutes = require('./routes/userRoutes'); // Rutas /users
const shopCartsRoutes = require('./routes/shopCartRoutes'); // Rutas /carritoCompras

app.use('/', mainRoute);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/shopcarts', shopCartsRoutes);

/////**********OTHERS*********
app.listen(3000, () => console.log('Server running at http://localhost:3000'));

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
/*app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/

// ************ exports app - dont'touch ************
module.exports = app;




