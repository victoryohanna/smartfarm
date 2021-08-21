const express = require("express");
const router = express.Router();

const { addProduct, getProduct, allProduct, allCrops } = require("../controllers/productController");
const {userLogIn} = require("../controllers/userLogin.controller")

router.post("/crop", addProduct);
router.post("/product", getProduct);
router.get("/products", allProduct);
router.get("/crops", allCrops);
router.post("/login", userLogIn)

module.exports = router;
