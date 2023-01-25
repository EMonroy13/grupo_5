const express = require ("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require ("multer");
const path = require('path');

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

// crear productos
router.get("/productCreate/", productsController.create);
router.post("/productCreate/", upload.single('image') ,productsController.processCreate);

// editar productos
router.get("/productEdit/:id", productsController.edit);
router.post("/productEdit/:id", upload.single('image') ,productsController.processEdit);

//eliminar un producto
router.delete('/delete/:id', productsController.destroy);

//devolver el detalle del producto
router.get("/productDetail/:id", productsController.productDetail);


// devolver carrito de compras
router.get("/productCart", productsController.cart);

module.exports = router;