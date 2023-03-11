const express = require ("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require ("multer");
const path = require('path');
const auhtMiddleware = require ("../middlewares/auhtMiddleware")

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "public/img/");
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer ({storage: storage});
// devolver todos los productos
router.get("/allProducts", productsController.allProducts);
router.get("/productCategory/:id", productsController.category)
// crear productos
router.get("/productCreate/", /* auhtMiddleware, */ productsController.create);
router.post("/productCreate/", upload.single('image') ,productsController.processCreate);

// editar productos
router.get("/productEdit/:id",/*  auhtMiddleware , */productsController.edit);
router.put("/productEdit/:id", upload.single('image') ,productsController.processEdit);

//eliminar un producto
router.delete('/delete/:id',/* auhtMiddleware , */ productsController.destroy);

//devolver el detalle del producto
router.get("/productDetail/:id", productsController.productDetail);


// devolver carrito de compras
router.get("/productCart", productsController.cart);

module.exports = router;