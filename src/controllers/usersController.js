const path = require ("path");
const fs = require ("fs")
const usersFilePath = path.join(__dirname, "../database/users.json");

const bcrypt = require("bcryptjs"); 

const usersController = {
    login: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/login"))

    },

    loginProcess: (req, res ) =>{ 
// usar el middleware para chekear si se dan las comparaciones 

// res.redirect("/")


    },
    register: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/register"))
    },
    registerProcess:(req,res)=>{
        const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

        /* crear validación para products.length si esta vacio */

let hash = bcrypt.hashSync(req.body.password, 10)
        let newUser = {
            id : users[users.length - 1].id + 1,
            firstName: req.body.nombre,
            lastName: req.body.apellido,
            email: req.body.correo,
            password: hash,
            category: "admin",
            imageProfile: req.file ? req.file.filename : 'defaultImageProfile.png' ,
            };
        /* Necesitamos pushear el nuevo usuario*/
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
        res.redirect("/user/login");
    }
}

module.exports = usersController;