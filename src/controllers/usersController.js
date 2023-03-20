const path = require ("path");
const fs = require ("fs")
const db = require("../database/models/index")
const {validationResult} = require("express-validator")
const bcrypt = require("bcryptjs"); 

const usersController = {
    login: (req, res)=>{ 
      
        res.render(path.resolve(__dirname, "../views/login"))

    },

    loginProcess: (req, res ) =>{ 
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0){
           res.render(path.resolve(__dirname, "../views/login"), { 
               errors : resultValidation.mapped(),
           })
        } else{
    db.User.findAll().then(usuario => {
       let usuarioLogueado = [];
        if(req.body.email != "" && req.body.password != ""){  // pregunto si no llegan vacios los campos 
        usuarioLogueado = usuario.filter(function(user){    // filtro con esos campos 
            return user.email==req.body.email               // retorno ese usuario de la db 
        });
       }
       if (bcrypt.compareSync(req.body.password,usuarioLogueado[0].password)===false){  
        usuarioLogueado = [];                                    
       }
       if(usuarioLogueado.length === 0){
        return res.send("las credenciales son invalidas") // error de back para que no traten de mandar los campos vacios 
       }else{
        req.session.usuario = usuarioLogueado[0];
       }
         return res.redirect("/")
    
        }); 
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
        const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0){
			res.render(path.resolve(__dirname, "../views/register"), { 
				errors : resultValidation.mapped(),
				oldData : req.body
			})
		}else{
        let hash = bcrypt.hashSync(req.body.password, 10)
        db.User.create({
            firstName: req.body.nombre,
            lastName: req.body.apellido,
            email: req.body.correo,
            password: hash,
            id_categoria: 3, // cambiarlo manualmente para decidir si es adm o vendedor.
            imageProfile: req.file ? req.file.filename : 'defaultImageProfile.png' ,
            });
            res.redirect("/user/login");
        }
        /* Necesitamos pushear el nuevo usuario*/
       
    }
}

module.exports = usersController;