const { check, validationResult, body} = require('express-validator');

const path = require ("path");

//seguir completando el middleware

module.exports = [
    check("nombre")
    .notEmpty().withMessage("El campo de nombre no puede estar vacio.").bail()
    .isLength({min:2}).withMessage("El nombre debe tener minimo 2 caracteres."),
    check("apellido")
    .notEmpty().withMessage("El campo de apellido no puede estar vacio.").bail()
    .isLength({min:3}).withMessage("El apellido debe tener minimo 3 caracteres."),
    check("imagenPerfil").custom((value, {req})=>{
        let file = req.file;
        let aceptExt = [".jpg",".png",".png", ".gif"];
        if (!file){
            return true
        }else{
            let fileExt = path.extname(file.originalname);
            if(!aceptExt.includes(fileExt)){
                throw new Error("Debe ingresar los formatos admitidos " + aceptExt.join(" o "))
            }
            return true;
        }
    }),
    check("correo")
    .notEmpty().withMessage("Tienes que escribir un email").bail()
    .isEmail().withMessage("Email incorrecto"),
     check("password")
        .notEmpty().withMessage("Tienes que escribir una contraseña").bail()
        .isLength({min:8}).withMessage("La contraseña debe contener al menos 8 caracteres"),
    check("password")
        .notEmpty().withMessage("Tienes repetir la contraseña").bail()
        .custom((value, {req})=>{
            if (req.body.password != value){
                throw new Error("El campo debe contener la misma contraseña")
            }else{
                return true
            }
        })
    
]
