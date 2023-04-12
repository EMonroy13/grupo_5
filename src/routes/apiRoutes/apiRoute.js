const express = require ("express");
const router = express.Router();
const productApiController = require ("../../controllers/apiController/productsApiController");
const userApiController = require ("../../controllers/apiController/usersApiController");

router.get("product/allProducts", productApiController.allProducts)
router.get("product/:id", productApiController.productDetail)
router.get("user/allUsers", userApiController.allUsers)
router.get("user/:id", userApiController.userDetail)

module.exports = router;