const express = require ("express");
const router = express.Router();
const allProductsController = require("../controllers/allProductsController");

router.get("/allProducts", allProductsController.allProducts);

module.exports = router;