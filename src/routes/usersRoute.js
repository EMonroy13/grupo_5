const express = require ("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require ("multer");
const path = require('path');
const registerValidation = require ("../middlewares/registerValidation")
// const auhtMiddleware = require("../middlewares/auhtMiddleware") para que no pueda entrar en profile si no esta logeado 
const guestMiddleware = require("../middlewares/guestMiddleware")
const { check, validationResult, body} = require('express-validator');
const db = require ("../database/models/index")

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "public/img/users/");
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer ({storage: storage});
// rutas de usuarios


router.get("/register",guestMiddleware, usersController.register);

db.User.findAll() // Utilizamos una promesa antes de la ruta para poder validar el email
    .then((users) => {

        router.post("/register",upload.single('imagenPerfil'), registerValidation,[
            check("correo").custom((value, {req})=>{
                let contador = 0;
                for (let i = 0; i < users.length; i++) {
                    if (users[i].email == value) {  // recorremos la base de dato preguntando si el email es igual que en el input
                        contador++;
                    }
                }
                if (contador > 0) {
                    return false;   
                } else {
                    return true;  
                }
                }).withMessage('El usuario ya se encuentra registrado'),
        ] , usersController.registerProcess);
})
.catch((errors) => {
    console.log(errors);
})

router.get("/login",guestMiddleware, usersController.login);
router.post("/login",usersController.loginProcess);
router.post("/logOut",usersController.logOut);

router.get("/profile",usersController.profile)
module.exports = router;