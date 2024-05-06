const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');


router.get("/products", productController.getAllProducts);
// POST new clothes
router.post("/products", productController.createProduct);
router.put('/products/:id', productController.updateProduct);

router.delete('/products/:id', productController.deleteProduct);
module.exports = router;