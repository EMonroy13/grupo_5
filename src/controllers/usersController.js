const path = require ("path");
const fs = require ("fs")
const User = require("../models/user.js")
const usersFilePath = path.join(__dirname, "../database/users.json");

const bcrypt = require("bcryptjs"); 

const usersController = {
    login: (req, res)=>{ 
      
        res.render(path.resolve(__dirname, "../views/login"))

    },

    loginProcess: (req, res ) =>{ 
let userToLogin = User.findByField("email", req.body.email); //busca el usuario por email uno por uno 
if(userToLogin){
    let isOkPassword = bcrypt.compareSync(req.body.password, userToLogin.password) // compara los password
    if(isOkPassword) {
        delete userToLogin.password; // borra la contraseña de session por seguridad 
        req.session.userLogged = userToLogin; 
        res.redirect("/")   // hay que crear la vista de perfil de usuario 
    }else{
    return res.send("las credenciales son invalidas") // hay que usar express validator para que quede en la vista el error sin que se borre todo 
    } 
}

},
    profile:(req,res)=>{
        
        res.render(path.resolve(__dirname, "../views/profile"))
    },
    logOut: (req, res) => {
        req.session.destroy();
        return res.redirect("/");
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