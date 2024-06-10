function guestMiddleware(req, res, next) {
	if (req.session.userLogged) {/* pregunto si tengo a alguien en session */
		return res.redirect('/users/profile');/* me redirijo a la vista del perfil */
	}
	next();/* si no tengo a nadie, hago next y que el req siga con el proceso  */
}

module.exports = guestMiddleware;