const express = require ("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require ("multer");
const path = require('path');
const auhtMiddleware = require ("../middlewares/auhtMiddleware")
const createValidation = require("../middlewares/createValidation");
const editValidation = require("../middlewares/editValidation")
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
router.get("/productCreate/", auhtMiddleware, productsController.create);
router.post("/productCreate/", upload.single('image') , createValidation, productsController.processCreate);

// editar productos
router.get("/productEdit/:id", auhtMiddleware ,productsController.edit);
router.put("/productEdit/:id", upload.single('image') , editValidation, productsController.processEdit);

//eliminar un producto
router.delete('/delete/:id',auhtMiddleware , productsController.destroy);

//devolver el detalle del producto
router.get("/productDetail/:id", productsController.productDetail);

router.get("/productSearch/", productsController.search)


// devolver carrito de compras
router.get("/productCart", productsController.cart);

module.exports = router;