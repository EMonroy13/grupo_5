const path = require ("path");
const fs = require ("fs")
const usersFilePath = path.join(__dirname, "../database/users.json")

const usersController = {
    login: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/login"))
    },
    register: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/register"))
    },
    registerProcess:(req,res)=>{
        const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

        /* crear validación para products.length si esta vacio */

        let newUser = {
            id : users[users.length - 1].id + 1,
            firstName: req.body.nombre,
            lastName: req.body.apellido,
            email: req.body.correo,
            password: req.body.password,
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