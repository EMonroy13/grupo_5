const express = require ("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require ("multer");

// devolver todos los productos
router.get("/allProducts", productsController.allProducts);

// crear productos
router.get("/productCreate", productsController.create);

// editar productos
router.get("/productEdit", productsController.edit);

//eliminar un producto


//devolver el detalle del producto
router.get("/productDetail", productsController.productDetail);

// devolver carrito de compras
router.get("/productCart", productsController.cart);

module.exports = router;