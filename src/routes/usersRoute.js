const express = require ("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require ("multer");
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "public/img/users/");
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});
    
// rutas de usuarios
router.get("/register", usersController.register);
router.post("/register", usersController.registerProcess);


router.get("/login", usersController.login);

module.exports = router;