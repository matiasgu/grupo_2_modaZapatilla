function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {/* pregunto si NO tengo a nadie en session */
		return res.redirect('/users/login');/* lo redijo el login */
	}
	next();/* que siga al siguiente controlador */
}

module.exports = authMiddleware;