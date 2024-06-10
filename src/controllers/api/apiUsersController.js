const db = require ("../../database/models");

const apiUsersController ={

    list: (req, res) =>{
        db.User.findAll()
        .then((users) => {
            let response = {};
            if(users.length == 0){
                response = {
                    meta: {
                        status: 204,
                        total: users.length,
                        url: 'api/users'
                    },
                    data: users.map(user => {
                        return {
                            id: user.id,
                            name: user.first_name,
                            lastName: user.last_name,
                            email: user.email,
                            tipo: user.is_staff,
                            image: '/images/users/' + user.image,
                            detail: 'api/users' + user.id
                        }
                    })
                }
            } else {
                response = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/users'
                    },
                    data: users.map(user => {
                        return {
                            id: user.id,
                            name: user.first_name,
                            lastName: user.last_name,
                            email: user.email,
                            tipo: user.is_staff,
                            image: '/images/users/' + user.image,
                            detail: 'api/users' + user.id
                        }
                    })
                }
            }
            return res.status(200).json(response);
        })
        .catch(() =>{
            return res.status(500).json({
                meta: {
                    status: 500,
                    error: 'Internal server error',
                    url: 'api/users'
                },
            });
        });
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
            if(user){
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: user.length,
                        url: 'api/users'
                    },
                    data: {
                        id: user.id,
                        name: user.first_name,
                        username: user.username,
                        lastName: user.last_name,
                        email: user.email,
                        image: '/images/users/' + user.image,
                        detail: 'api/users' + req.params.id,
                        tipo: user.is_staff,
                        created_at: user.created_at,
                        updated_at: user.updated_at
                    }
                });
            } else {
                return res.status(404).json({
                    meta: {
                        status: 204,
                        url: 'api/users' + req.params.id
                    }
                });
            }
        })
        .catch(() => {
            return res.status(500).json({
                meta: {
                    status: 500,
                    error: 'Internal server error',
                    url: 'api/users' + req.params.id
                }
            });
        });
    }
}

module.exports= apiUsersController;

