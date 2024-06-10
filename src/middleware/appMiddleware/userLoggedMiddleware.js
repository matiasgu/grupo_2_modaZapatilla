const db = require('../../database/models');

/**
 * Middleware que verifica si el usuario está logueado y guarda la información en res.locals.
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @param {Function} next - La función de siguiente middleware.
 */
// CREO ESTE Middleware para LOGUEARME AUTOMATICAMENTE DE LA COOKIE

const userLoggedMiddleware = async (req, res, next) => {
    res.locals.isLogged = false; 
    if(req.cookies.userEmail){ // Verificar si el usuario tiene una cookie con su email
        let userEmail = req.cookies.userEmail; // Buscar al usuario que corresponde a ese email
        let user = await db.User.findOne({ where: { email: userEmail } });
        console.log('con password'+user);
         if(user){ // Si el usuario existe, lo guardamos en session
            delete user.dataValues.password; 
            req.session.userLogged = user;
            console.log('sin password'+user);
         } 

    }
    // ESTO ME SIRVE PARA MODIFICAR SI ESTOY LOGUEADO LA BARRA DE NAVEGACION
    
    if(req.session.userLogged){ // Verificar si el usuario está logueado, Si está logueado, lo guardamos en res.locals para que esté disponible en todas las vistas
        res.locals.isLogged = true; // esta variable es la que usare para hacer la barra dinamica
        res.locals.userLogged = req.session.userLogged;
    }
    next();
}

module.exports = userLoggedMiddleware;
