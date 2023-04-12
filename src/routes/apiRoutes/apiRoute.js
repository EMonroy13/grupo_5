const express = require ("express");
const router = express.Router();
const productApiController = require ("../../controllers/apiController/productsApiController");
const userApiController = require ("../../controllers/apiController/usersApiController");

router.get("product/allProducts", productApiController)
router.get("product/:id", productApiController)
router.get("user/allUsers", userApiController)
router.get("user/:id", userApiController)

module.exports = router;