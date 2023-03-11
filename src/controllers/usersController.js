const path = require ("path");
const fs = require ("fs")
const db = require("../database/models/index")

const bcrypt = require("bcryptjs"); 

const usersController = {
    login: (req, res)=>{ 
      
        res.render(path.resolve(__dirname, "../views/login"))

    },

    loginProcess: (req, res ) =>{ 

    db.User.findAll().then(usuario => {
       let usuarioLogueado = [];

       if(req.body.email != "" && req.body.password != ""){  // pregunto si no llegan vacios los campos 
        usuarioLogueado = usuario.filter(function(user){    // filtro con esos campos 
            return user.email==req.body.email               // retorno ese usuario de la db 
        });
       }else if (bcrypt.compareSync(req.body.password,usuarioLogueado[0].password)===false){  
        usuarioLogueado = [];                                    
       } else if(usuarioLogueado.length === 0){
        return res.send("las credenciales son invalidas") // error de back para que no traten de mandar los campos vacios 
       }else {
        req.session.usuario = usuarioLogueado[0];
       }
         return res.redirect("/")
        });

       






// if(usuario){
//     let isOkPassword = bcrypt.compareSync(req.body.password, usuario.password) // compara los password
//     if(isOkPassword) {
//         delete usuario.password; // borra la contraseña de session por seguridad 
//         
//         //mantener session
//         res.redirect("/")   // hay que crear la vista de perfil de usuario 
//     }else{
//     return res.send("las credenciales son invalidas") // hay que usar express validator para que quede en la vista el error sin que se borre todo 
//     } 
// }

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
        

        /* crear validación para products.length si esta vacio */

        let hash = bcrypt.hashSync(req.body.password, 10)
        db.User.create({
            firstName: req.body.nombre,
            lastName: req.body.apellido,
            email: req.body.correo,
            password: hash,
            id_categoria: 3, // cambiarlo manualmente para decidir si es adm o vendedor.
            imageProfile: req.file ? req.file.filename : 'defaultImageProfile.png' ,
            });
        /* Necesitamos pushear el nuevo usuario*/
        res.redirect("/user/login");
    }
}

module.exports = usersController;