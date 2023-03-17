const {check} = require("express-validator");
const path = require ("path");
const db = require ("../database/models/index")
//seguir completando el middleware

module.exports = [
    check("nombre")
    .notEmpty().withMessage("El campo de nombre no puede estar vacio.").bail()
    .isLength({min:4}).withMessage("El nombre debe tener minimo 4 caracteres."),
    check("apellido")
    .notEmpty().withMessage("El campo de apellido no puede estar vacio.").bail()
    .isLength({min:4}).withMessage("El apellido debe tener minimo 4 caracteres."),
    check("imagenPerfil").custom((value, {req})=>{
        let file = req.file;
        let aceptExt = [".jpg",".png"];
        if (!file){
            throw new Error("Debes subir una imagen")
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
    .isEmail().withMessage("Email incorrecto").bail()
    .custom((value, {req})=>{
        db.findOne({where:{email : req.body.correo}}).then(email=>{
            console.log(email)
            /*    if (email) {       // verificar que respondo la db cuando no se encuentra el email

            } */
        })
    }),
    check("password")
        .notEmpty().withMessage("Tienes que escribir una contraseña").bail()
        .isLength({min:8}).withMessage("La contraseña debe contener al menos 8 caracteres"),
    check("repassword")
        .notEmpty().withMessage("Tienes repetir la contraseña").bail()
        .custom((value, {req})=>{
            let contra = req.body.password;
            let recontra = req.body.repassword;
            if (contra != recontra){
                throw new Error("El campo debe contener la misma contraseña")
            }else{
                return true
            }
        })
    
]
