const { check, validationResult, body} = require('express-validator');

const path = require ("path");

//seguir completando el middleware

module.exports = [
    check("productName")
    .notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isLength({min:5}).withMessage("El nombre  del producto debe tener minimo 5 caracteres."),
    check("image").custom((value, {req})=>{
        let file = req.file;
        let aceptExt = [".jpg",".png",".png", ".gif"];
        if (!file){
            throw new Error ("Debe ingresar una imagen del producto");
        }else{
            let fileExt = path.extname(file.originalname);
            if(!aceptExt.includes(fileExt)){
                throw new Error("Debe ingresar los formatos admitidos " + aceptExt.join(" o "))
            }
            return true;
        }
    }),
    check("description")
    .isLength({min:20}).withMessage("La descripcion debe contener al menos 20 caracteres"),
    check("category").custom((value, {req})=>{
        if (value == 0) {
            throw new Error ("Debe seleccionar una categoria")
        }else{
            return true
        }
    }),
    check("color").custom((value, {req})=>{
        if (value == 0) {
            throw new Error ("Debe seleccionar un color")
        }else{
            return true
        }
    }),
    check("price")
    .notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isNumeric().withMessage("El precio debe estar escrito en numeros")
]