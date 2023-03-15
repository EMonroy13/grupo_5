const express = require ("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require ("multer");
const path = require('path');
const registerValidation = require ("../middlewares/registerValidation")
// const auhtMiddleware = require("../middlewares/auhtMiddleware") para que no pueda entrar en profile si no esta logeado 
const guestMiddleware = require("../middlewares/guestMiddleware")


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
router.post("/register",upload.single('imagenPerfil'), registerValidation, usersController.registerProcess);


router.get("/login",guestMiddleware, usersController.login);
router.post("/login",usersController.loginProcess);
router.post("/logOut",usersController.logOut);

router.get("/profile",usersController.profile)
module.exports = router;