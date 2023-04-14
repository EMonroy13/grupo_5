const db = require("../../database/models/index");

const usersApiController = {
  allUsers: async function (req, res) {
    try {
      let users = await db.User.findAll();
      let usuario = users.map((users) => {
        const usuario2 = {
          id: users.id,
          firstName: users.firstName,
          lastName: users.lastName,
          email: users.email,
          imageProfile: users.imageProfile,
        };
        return usuario2;
      });
      let respuesta = {
        meta: {
          status: 200,
          total: users.length,
        },
        data: usuario,
      };
      res.json(respuesta);
    } catch (error) {
      res.send(error);
    }
  },
  userDetail: (req, res) => {
    db.User.findByPk(req.params.id).then((user) => {
      let usuario = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        imageProfile: "http://localhost:3000/img/users/" + user.imageProfile,
      };
      let respuesta = {
        meta: {
          status: 200,
          url: "/api/user/:id",
        },
        data: usuario,
      };
      res.json(respuesta);
    });
  },
};

module.exports = usersApiController;
