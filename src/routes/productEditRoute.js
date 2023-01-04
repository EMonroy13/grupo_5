const express = require ("express");
const router = express.Router();
const productEditController = require("../controllers/productEditController");

router.get("/productUpdate", productEditController.update);
router.get("/productEdit", productEditController.edit);

module.exports = router;