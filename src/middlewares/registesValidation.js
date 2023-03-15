const {check} = require("express-validator");


//seguir completando el middleware

module.exports = [
    check("nombre")
    .notEmpty().whithMessage("El campo de nombre no puede estar vacio.").bail()
    .isLength({min:4}).whithMessage("el nombre debe tener minimo 4 caracteres.")
    ,
    check("apellido")
    .notEmpty().whithMessage("El campo de apellido no puede estar vacio.").bail()
    .isLength({min:4}).whithMessage("el apellido debe tener minimo 4 caracteres.")
    ,
    check("imagenPerfil")
    
]
