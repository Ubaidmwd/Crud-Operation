const express = require("express");
const {
  getAllProducts,
  addProducts,
  updateProducts,
  deleteProducts,detailProducts
} = require("../controller/productController");
const validate = require("../middleware/validate");
const productValidation=require("../validations/product.validation")
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/add").post(validate(productValidation.addProduct),addProducts);
router.route("/products/:id").put(updateProducts).delete(deleteProducts).get(detailProducts);

module.exports = router;
