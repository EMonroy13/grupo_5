const db = require('../../database/models/index');

const usersApiController = {
    allUsers: (req,res)=>{
        db.User.findAll().then(users=>{
                let respuesta = {
                    meta: {
                        status : 200,
                        total: users.length,
                    },
                    data: users
                }
                    res.json(respuesta);
               }).catch((error)=>{
                res.send(error);
            })
    },
    userDetail:(req,res)=>{
        db.User.findByPk(req.params.id,)
            .then(user=> {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/user/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    }
}

module.exports = usersApiController;