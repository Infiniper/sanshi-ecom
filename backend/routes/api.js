// backend/routes/api.js
const express = require("express");
const router = express.Router();
const { productQueryRules, contactRules } = require('../middlewares/validators');

const { listProducts, getProduct } = require('../controllers/productController');
const { submitContact } = require('../controllers/contactController');

// NOTE: categories removed because Sanshi E-COM has no categories

router.get('/products', productQueryRules, listProducts);
router.get('/products/:id', getProduct);
router.post('/contact', contactRules, submitContact);

module.exports = router;
