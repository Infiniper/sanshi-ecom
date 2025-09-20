const express = require("express");
const router = express.Router();
const { productQueryRules, contactRules, orderRules } = require('../middlewares/validators');

const { listCategories } = require('../controllers/categoryController');
const { listProducts }   = require('../controllers/productController');
const { submitContact }  = require('../controllers/contactController');
// const { createOrder }    = require('../controllers/orderController');

router.get('/categories', listCategories);
router.get('/products', productQueryRules, listProducts);
router.post('/contact', contactRules, submitContact);
// router.post('/orders', orderRules, createOrder);

module.exports = router;
