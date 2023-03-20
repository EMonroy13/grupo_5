const { check, validationResult, body} = require('express-validator');

const path = require ("path");


module.exports = [
    check("email")
    .notEmpty().withMessage("El campo de email no puede estar vacio.").bail()
    .isEmail().withMessage("Debe ingresar un email valido.")
    , 
    check("password")
    .notEmpty().withMessage("El campo de password no puede estar vacio.")
]