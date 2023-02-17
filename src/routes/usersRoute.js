const express = require ("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require ("multer");
const path = require('path');
// const logMiddle = require("")


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
router.get("/register", usersController.register);
router.post("/register",upload.single('imagenPerfil'), usersController.registerProcess);


router.get("/login", usersController.login);
router.post("/login",usersController.loginProcess);
module.exports = router;